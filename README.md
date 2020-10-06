# webpack-merge test with single-spa config

1. clone with submodules `git clone --recursive https://github.com/filoxo/webpack-merge-test.git`
1. `cd webpack-merge`
1. verify that submodule is using the `develop` branch

   - If not, `git checkout develop`

1. run `npm install`
1. run `npm run build`
1. return to parent directory `cd ..`
1. run `yarn install` (or `npm install` but I've been using yarn for this project)
1. run `yarn build` and inspect the output config

I see the following:

```sh
yarn run v1.22.4
warning package.json: No license field
$ webpack-dev-server
{
  entry: '[app]/src/example-application.js',
  output: {
    filename: 'example-application.js',
    libraryTarget: 'system',
    path: '[app]/dist',
    jsonpFunction: 'webpackJsonp_application'
  },
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: '[app]/node_modules/babel-loader/lib/index.js'
        }
      },
      {
        test: /\.css$/i,
        include: [ /node_modules/, /src/ ],
        use: [
          {
            loader: '[app]/node_modules/style-loader/dist/cjs.js'
          },
          {
            loader: '[app]/node_modules/css-loader/dist/cjs.js',
            options: { modules: false }
          }
        ]
      },
      { test: /\.html$/i, use: [ { loader: 'html-loader' } ] },
      {
        test: /\.css$/i,
        use: [
          {
            loader: '[app]/node_modules/style-loader/dist/cjs.js'
          },
          {
            loader: '[app]/node_modules/css-loader/dist/cjs.js',
            options: { importLoaders: 1 }
          },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  },
  devtool: 'sourcemap',
  devServer: {
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    disableHostCheck: true
  },
  externals: [ 'single-spa', /^@example\// ],
  plugins: [
    CleanWebpackPlugin {
      dangerouslyAllowCleanPatternsOutsideProject: false,
      dry: false,
      verbose: false,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: true,
      cleanAfterEveryBuildPatterns: [],
      cleanOnceBeforeBuildPatterns: [ '**/*' ],
      currentAssets: [],
      initialClean: false,
      outputPath: '',
      apply: [Function: bound apply],
      handleInitial: [Function: bound handleInitial],
      handleDone: [Function: bound handleDone],
      removeFiles: [Function: bound removeFiles]
    },
    BundleAnalyzerPlugin {
      opts: {
        analyzerMode: 'disabled',
        analyzerHost: '127.0.0.1',
        reportFilename: null,
        reportTitle: [Function],
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: 'stats.json',
        statsOptions: null,
        excludeAssets: null,
        logLevel: 'info',
        startAnalyzer: true,
        analyzerPort: 8888
      },
      server: null,
      logger: Logger {
        activeLevels: Set { 'info', 'warn', 'error', 'silent' }
      }
    },
    UnusedFilesWebpackPlugin {
      options: {
        globOptions: {
          cwd: '/Users/carlosfiloteo/dev/single-spa-config-webpack-merge/src',
          ignore: [
            '**/*.test.*',
            '**/*.spec.*',
            '**/*.*.snap',
            '**/test-setup.*',
            '**/*.stories.*'
          ]
        },
        patterns: [ '**/*.*' ],
        failOnUnused: false
      },
      globOptions: {
        ignore: [
          '**/*.test.*',
          '**/*.spec.*',
          '**/*.*.snap',
          '**/test-setup.*',
          '**/*.stories.*'
        ],
        cwd: '/Users/carlosfiloteo/dev/single-spa-config-webpack-merge/src'
      }
    }
  ],
  resolve: { extensions: [ '.js', '.mjs', '.jsx', '.wasm', '.json' ] }
}
(node:31570) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /Users/carlosfiloteo/dev/single-spa-config-webpack-merge
✖ ｢wdm｣: Hash: 08b33674f52050adf55a
Version: webpack 4.44.2
Time: 1043ms
Built at: 10/06/2020 10:53:20 AM
                     Asset     Size  Chunks                   Chunk Names
    example-application.js  365 KiB    main  [emitted]        main
example-application.js.map  413 KiB    main  [emitted] [dev]  main
Entrypoint main = example-application.js example-application.js.map
[0] multi (webpack)-dev-server/client?http://localhost:8080 ./src/example-application.js 40 bytes {main} [built]
[./node_modules/ansi-html/index.js] 4.16 KiB {main} [built]
[./node_modules/single-spa-html/lib/single-spa-html.js] 4.15 KiB {main} [built]
[./node_modules/webpack-dev-server/client/index.js?http://localhost:8080] (webpack)-dev-server/client?http://localhost:8080 4.29 KiB {main} [built]
[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.51 KiB {main} [built]
[./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/createSocketUrl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.91 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {main} [built]
[./node_modules/webpack-dev-server/client/utils/reloadApp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.59 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/sendMessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {main} [built]
[./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js] (webpack)-dev-server/node_modules/strip-ansi/index.js 161 bytes {main} [built]
[./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {main} [built]
[./src/example-application.js] 439 bytes {main} [built]
[./src/styles.css] 664 bytes {main} [built]
[./src/template.html] 106 bytes {main} [built]
    + 23 hidden modules

ERROR in ./src/styles.css (./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--8-1!./node_modules/postcss-loader/src!./src/styles.css)
Module build failed (from ./node_modules/css-loader/dist/cjs.js):
CssSyntaxError

(1:1) Unknown word

> 1 | var api = require("!../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
    | ^
  2 |             var content = require("!!../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src/index.js!./styles.css");
  3 |

 @ ./src/styles.css 2:26-234
 @ ./src/example-application.js
ℹ ｢wdm｣: Failed to compile.
```

## Notes

It starts failing at commit `819fa772a7dd655269f12cef62c740361eb6dc77`. Returning to the commit before (eg `59bf0982f0e9ccf3cf1e5f0f7d89feafb2ff9382`) it works. Verify this by:

- `cd webpack-merge`
- `git checkout 59bf0982f0e9ccf3cf1e5f0f7d89feafb2ff9382 `
- `npm run build`
- `cd ..`
- `yarn start`

Note the command succeeds and the loaders configs are correctly merged.
