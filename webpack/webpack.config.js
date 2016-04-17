import HtmlWebpackPlugin from 'html-webpack-plugin'
import cssnext from 'postcss-cssnext'
import rucksack from 'rucksack-css'
import sorting from 'postcss-sorting'
import short from 'postcss-short'
import CONFIG from './config.js'

import webpackDevConfig from './dev.config.js'
import webpackProdConfig from './prod.config.js'

/*=============================================
 =           Webpack Global Variables          =
 =============================================*/

const {
  __DEVELOPMENT__,
  __PRODUCTION__
} = CONFIG.globals

/*=============================================
 =           Webpack Configuarations           =
 =============================================*/

const webpackConfig = {
  target     : 'web',
  devtool    : 'source-map',
  node       : { fs: 'empty' },
  resolve    : { extensions: ['', 'json', '.js', '.jsx'] },
  module     : {}
}

/*=============================================
 =           Entry points for App              =
 =============================================*/

webpackConfig.entry = {
  app: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    CONFIG.appPath
  ]
}

/*=============================================
 =           Output points for App             =
 =============================================*/

webpackConfig.output = {
  path          : CONFIG.distPath,
  filename      : '[name].[hash].js',
  publicPath    : `http://${CONFIG.serverHost}:${CONFIG.serverPort}/`
}

/*=============================================
 =                 Pre-Loaders                =
 =============================================*/
// In the Future.

/*=============================================
 =         JavaScript and JSON Loaders         =
 =============================================*/

webpackConfig.module.loaders = [
  {
    test       : /\.jsx?$/,
    include    : CONFIG.appPath,
    loader     : 'babel-loader?cacheDirectory'
  },
  {
    test       : /\.json$/,
    loaders    : ['json']
  }
]

/*=============================================
 =     Style Loaders and Configurations        =
 =============================================*/

webpackConfig.module.loaders.push(
  {
    test       : /\.(css|scss|sass|styl)$/,
    loaders    : ['style', 'css', 'postcss', 'stylus'],
    include    : CONFIG.appPath
  }
)
// Add postcss plugins here
webpackConfig.postcss = () => {
  return [
    cssnext,
    rucksack,
    sorting,
    short
  ]
}

/*=============================================
 =              File Loaders                   =
 =============================================*/

webpackConfig.module.loaders.push(
  {
    test: /\.woff(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.woff2(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
  },
  {
    test: /\.otf(\?.*)?$/,
    loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
  },
  {
    test: /\.ttf(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.eot(\?.*)?$/,
    loader: 'file?prefix=fonts/&name=[path][name].[ext]'
  },
  {
    test: /\.svg(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
  },
  {
    test: /\.(png|jpg|gif)$/,
    loader: 'url?limit=8192'
  }
)

/*=============================================
 =            Plugin Configurations            =
 =============================================*/

webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    template    : CONFIG.htmlPath,
    hash        : false,
    filename    : 'index.html',
    inject      : 'body',
    minify: {
      collapseWhitespace: true
    }
  })
]

/*=============================================
 =     Development Only Configurations         =
 =============================================*/

if (__DEVELOPMENT__) {
  webpackDevConfig(webpackConfig, CONFIG)
}

/*=============================================
 =     Production Only Configurations          =
 =============================================*/

if (__PRODUCTION__) {
  webpackProdConfig(webpackConfig, CONFIG)
}

export default webpackConfig
