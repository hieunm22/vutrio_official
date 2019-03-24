import {
  FuseBox,
  CopyPlugin,
  EnvPlugin,
  JSONPlugin,
  SassPlugin,
  CSSPlugin,
  CSSResourcePlugin,
  WebIndexPlugin,
  QuantumPlugin,
} from 'fuse-box'

import {
  src,
  task,
} from 'fuse-box/sparky'

const isProduction = process.env.STG === 'production'
const assetExts = ['ico', 'jpg', 'png'].map(ex => `static/*.${ex}`)

const config = {
  homeDir: '.',
  output: 'dist/$name.js',
  target: 'browser@esnext',
  hash: isProduction,
  cache: !isProduction,
  log: {
    showBundledFiles: true,
    clearTerminalOnBundle: true,
  },
  autoImport: {
    React: 'react',
  },
  alias: {
    '@component': '~/component',
    '@utility': '~/utility',
    '@static': '~/static',
    '@style': '~/style',
  },
  plugins: [
    EnvPlugin(process.env),
    WebIndexPlugin({ template: 'static/index.html' }),
    CopyPlugin({ files: assetExts }),
    [
      SassPlugin({ importer: true }),
      CSSResourcePlugin({
        macros: {
          static: `${__dirname}/static/`
        },
        dist: 'dist/css-resources',
      }),
      CSSPlugin({
        inject: file => `${file}`,
        outFile: file => `dist/${file}`,
      }),
    ],
    JSONPlugin(),
    isProduction && QuantumPlugin({
      replaceProcessEnv: true,
      treeshake: true,
      uglify: true,
      bakeApiIntoBundle: true,
    }),
  ],
}

task('clean_all', () => src('dist').clean('dist').exec())
task('default', ['clean_all'], () => {
  const fuse = FuseBox.init(config)
  const bundle = fuse.bundle('app')
  if (!isProduction) {
    fuse.dev({ port: 3000 })
    bundle
        .watch('(component|utility|static|style)/**.(ts|tsx|scss|jpg|png|html)')
        .hmr()
  }
  bundle.instructions('> index.tsx')
  return fuse.run()
})
