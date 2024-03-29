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
const assetExts = ['jpg', 'png'].map(ex => `static/photo/*.${ex}`)

const config = {
  homeDir: '.',
  output: 'dist/$name.js',
  target: 'browser@esnext',
  cache: !isProduction,
  log: {
    showBundledFiles: !isProduction,
    clearTerminalOnBundle: !isProduction,
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
  sourceMaps: false,
  plugins: [
    EnvPlugin(process.env),
    WebIndexPlugin({ template: 'static/template/index.html' }),
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
      bakeApiIntoBundle: 'app',
    }),
  ],
}

task('default', () => {
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
