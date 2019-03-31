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
const throwIfError = promise => promise.then(res => { if (res.stderr) throw new Error(res.stderr) })
const warn = str => spinner.warn(chalk.yellow(str))
const info = str => spinner.info(chalk.blue(str))
const fail = str => spinner.fail(chalk.red(str))
const succeed = str => spinner.succeed(chalk.green(str))

// Tasks
const setup = new Listr([
  {
    title: 'Checking server connection',
    task: async ctx => {
      const conn = await ssh.connect({
        host,
        username,
        privateKey,
      }).then(() => ssh, err => { throw new Error(`Cannot establish a connection to server ${host}`) })
      ctx.conn = conn
    }
  },
  {
    title: 'Update apt packages & Install Nginx',
    task: ctx => new Listr([
      {
        title: 'Update existing packages',
        task: () => throwIfError(ctx.conn.execCommand('apt-get update -y')),
      },
      {
        title: 'Install Nginx',
        task: () => throwIfError(ctx.conn.execCommand('DEBIAN_FRONTEND=noninteractive apt-get install nginx -y')),
      }
    ])
  },
  {
    title: 'Config firewall',
    task: ctx => new Listr([
      {
        title: 'Firewall allows ssh',
        task: () => throwIfError(ctx.conn.execCommand('ufw allow ssh')),
      },
      {
        title: 'Firewall allows NginX',
        task: () => throwIfError(ctx.conn.execCommand(`ufw allow 'Nginx HTTP'`)),
      },
      {
        title: 'Enable Firewall',
        task: () => ctx.conn.exec('ufw enable', [], {
          stream: 'both',
          stdin: 'y',
          onStderr: msg => { throw new Error(msg) },
        }),
      },
      {
        title: 'Verify FireWall Status',
        task: () => ctx.conn.exec('ufw status', [], {
          onStdout: str => { ctx.nginx_status = str }
        }),
      },
    ])
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
      {
        title: 'Setup NginX config',
        task: async () => {
          const conn = ctx.conn
          const localConfig = __dirname + '/nginx.conf'
          const remoteConfig = '/etc/nginx/sites-available/vutr.io'
          const throwOnError = err => { throw new Error(err) }
          await conn.putFile(localConfig, remoteConfig).then(void 0, throwOnError)
          await conn.execCommand('ln -s /etc/nginx/sites-available/vutr.io /etc/nginx/sites-enabled/vutr.io')
          await conn.execCommand('rm -r /etc/nginx/sites-enabled/default')
          await conn.execCommand('systemctl start nginx')
          await conn.execCommand('nginx -s reload')
        }
      },
    ])
  },
])

setup.run().then(ctx => {
  spinner.info(chalk.white.bgBlue.bold(' << UFW Firewall Status >> '))
  info(ctx.nginx_status)
  spinner.info(chalk.white.bgGreen.bold(' DONE '))
  open('http://' + host)
  process.exit()
}).catch(fail)
