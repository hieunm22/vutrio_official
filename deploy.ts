// This script is for auto-deploying non-ssl website
// SSL auto-setup currently under-development
import ora from 'ora'
import chalk from 'chalk'
import * as open from 'open'
import * as execa from 'execa'
import * as node_ssh from 'node-ssh'
import * as Listr from 'listr'

// Basic info
const task = process.argv[3]
const host = process.argv[4] || process.env.REMOTE_HOST
const username = process.env.REMOTE_USER
const privateKey = process.env.LOCAL_SSH_KEY
const ssh = new node_ssh()
const spinner = ora()

// Helper functions
const warn = str => spinner.warn(chalk.yellow(str))
const info = str => spinner.info(chalk.blue(str))
const fail = str => spinner.fail(chalk.red(str))
const succeed = str => spinner.succeed(chalk.green(str))

// Tasks
const setup = new Listr([
  {
    title: 'Checking server connection',
    task: ctx => ssh.connect({
      host,
      username,
      privateKey,
    }).then(
      () => { ctx.conn = ssh },
      err => { throw new Error(`Cannot establish a connection to server ${host}`) }
    )
  },
  {
    title: 'Update & install NginX, Certbot',
    task: async ctx => {
      const conn = ctx.conn
      await conn.exec('add-apt-repository ppa:certbot/certbot', [], {
        stream: 'both',
        stdin: `\n`,
      })
      await conn.execCommand('apt-get update -y')
      await conn.execCommand('DEBIAN_FRONTEND=noninteractive apt-get install nginx python-certbot-nginx -y')
    }
  },
  {
    title: 'Config firewall',
    task: async ctx => {
      const conn = ctx.conn
      await conn.execCommand('ufw allow ssh')
      await conn.execCommand(`ufw allow 'Nginx Full'`)
      await conn.exec('ufw enable', [], {
        stream: 'both',
        stdin: 'y',
      })
      await conn.execCommand('ufw status').then(res => { ctx.firewall = res.stdout })
    },
  },
  {
    title: 'Deploy the App',
    task: ctx => new Listr([
      {
        title: 'Bundle the app',
        task: () => execa.stdout('npm', ['run', 'build']),
      },
      {
        title: 'Prepare remote dir and copy files',
        task: async () => {
          const conn = ctx.conn
          await conn.mkdir('/vutr')
          const failed = []
          const success = []
          const status = await conn.putDirectory(__dirname + '/dist', '/vutr', {
            recursive: true,
            tick: (localPath, remotePath, error) => {
              if (error) { failed.push(localPath) }
              else { success.push(localPath) }
            }
          })

          if (!status) {
            const retries = failed.map(file => ({
              local: file,
              remote: '/vutr' + file.replace(__dirname + '/dist', '')
            }))
            await conn.putFiles(retries).then(void 0, err => { throw new Error(err) })
          }
        },
      },
    ])
  },
  {
    title: 'Setup NginX & SSL (ssl-setup skipped!)',
    task: ctx => new Listr([
      {
        title: 'Setup NginX config',
        task: async () => {
          const conn = ctx.conn
          const throwOnError = err => { throw new Error(err) }
          await conn.putFile(__dirname + '/deploy/vutr.io.conf', '/etc/nginx/sites-available/vutr.io').then(void 0, throwOnError)
          await conn.execCommand('ln -s /etc/nginx/sites-available/vutr.io /etc/nginx/sites-enabled/vutr.io')
          await conn.execCommand('rm -r /etc/nginx/sites-enabled/default')
          await conn.execCommand('systemctl start nginx')
          await conn.execCommand('nginx -s reload')
        }
      },
      {
        title: 'Install free SSL',
        skip: () => true,
        task: async () => {
          const conn = ctx.conn
          const execCertbot = 'certbot --nginx --non-interactive --agree-tos --email me@vutr.io --redirect --hsts -d vutr.io -d www.vutr.io'
          const result = await conn.execCommand(execCertbot)
          if (result.stderr) { throw new Error(result.stderr) }
          ctx.certbot = result.stdout
          await conn.execCommand('nginx -s reload')
        },
      },
      {
        title: 'Verifying Certbot Renewal Process',
        skip: () => true,
        task: async () => {
          const result = await ctx.conn.execCommand('certbot renew --dry-run')
          if (result.stderr) { throw new Error(result.stderr) }
        },
      },
    ]),
  },
])

const update = new Listr([
  {
    title: 'Rolling update...',
    skip: () => true,
    task: () => {},
  }
])

if (task === 'setup') {
  setup.run().then(ctx => {
    spinner.info(chalk.white.bgBlue.bold(' << UFW Firewall Status >> '))
    info(ctx.firewall)
    spinner.info(chalk.white.bgGreen.bold(' DONE '))
    open('vutr.io')
    ctx.conn.dispose()
  }).catch(fail)
}

if (task === 'update') {
  update.run().then(ctx => {
    spinner.info(chalk.white.bgBlue.bold(' << Updated Finished >> '))
    info(ctx.copied_files.join(`\n`))
    open('vutr.io')
    ctx.conn.dispose()
  })
}
