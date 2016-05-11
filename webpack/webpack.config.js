import HtmlWebpackPlugin from 'html-webpack-plugin'
import _debug from 'debug'
import rucksack from 'rucksack-css'
import sorting from 'postcss-sorting'
import normalize from 'postcss-normalize'
import poststylus from 'poststylus'
import config from './config.js'

import webpackDevConfig from './dev.config.js'
import webpackProdConfig from './prod.config.js'

const debug = _debug('app:webpack:config')

/**
 * Webpack Global Variables
 */
const {
  __DEVELOPMENT__,
  __PRODUCTION__,
} = config.globals

/**
 * Webpack Configuarations
 */
debug('Starting Webpack Configurations...')
const webpackConfig = {
  target: 'web',
  devtool: config.devTool,
  node: { fs: 'empty' },
  resolve: { extensions: ['', '.json', '.js', '.jsx'] },
  module: {},
  vendor: ['react'],
  stylus: {},
}

/**
 * Entry points for App
 */
webpackConfig.entry = {
  app: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    config.appPath,
  ],
}

/**
 * Output points for App
 */
webpackConfig.output = {
  path: config.distPath,
  filename: '[name].[hash].js',
  publicPath: `http://${config.serverHost}:${config.serverPort}/`,
}

/**
 * JavaScript and JSON Loaders
 */
webpackConfig.module.loaders = [
  {
    test: /\.jsx?$/,
    include: config.appPath,
    loader: 'babel-loader?cacheDirectory',
  },
  {
    test: /\.json$/,
    loaders: ['json'],
  },
]

/**
 * Style Loaders and Configurations
 */
const styleModuleLoader = [
  'css?sourceMap&-minimize',
  'modules',
  'importLoaders=1',
  'localIdentName=[name]__[local]___[hash:base64:5]'
].join('&')

webpackConfig.module.loaders.push(
  {
    test: /\.styl$/,
    loaders: [
      'style',
      styleModuleLoader,
      'postcss',
      'stylus?resolve url',
    ],
    include: config.appPath,
  }
)

webpackConfig.stylus = {
  use: [
    poststylus([
      normalize,
      sorting,
      rucksack({
        autoprefixer: true,
        fallback: true,
      }),
    ]),
  ],
}

/**
 * File Loaders
 */
const filePrefix = 'prefix=fonts/&name=[path][name]'
const fileType = '.[ext]&limit=10000&mimetype='

webpackConfig.module.loaders.push(
  {
    test: /\.woff(\?.*)?$/,
    loader: `url?${filePrefix}${fileType}application/font-woff`,
  },
  {
    test: /\.woff2(\?.*)?$/,
    loader: `url?${filePrefix}${fileType}application/font-woff2`,
  },
  {
    test: /\.otf(\?.*)?$/,
    loader: `file?${filePrefix}${fileType}font/opentype`,
  },
  {
    test: /\.ttf(\?.*)?$/,
    loader: `url?${filePrefix}${fileType}application/octet-stream`,
  },
  {
    test: /\.eot(\?.*)?$/,
    loader: `file?${filePrefix}`,
  },
  {
    test: /\.svg(\?.*)?$/,
    loader: `url?{$filePrefix}${fileType}image/svg+xml`,
  },
  {
    test: /\.(png|jpg|gif)$/,
    loader: 'url?limit=8192',
  },
)

/**
 * Plugin Configurations
 */
webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    template: config.htmlPath,
    hash    : false,
    filename: 'index.html',
    inject  : 'body',
    minify  : { collapseWhitespace: true },
  }),
]

/**
 * Development Only Configurations
 */
if (__DEVELOPMENT__) {
  debug('Running only Development Webpack Configurations')
  webpackDevConfig(webpackConfig, config)
}

/**
 * Production Only Configurations
 */
if (__PRODUCTION__) {
  debug('Running only Production Webpack Configurations')
  webpackProdConfig(webpackConfig, config)
}

export default webpackConfig
