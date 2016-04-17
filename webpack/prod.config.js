import webpack from 'webpack'
import _debug from 'debug'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { cssLoaderAddExtract } from './utils/helpers'

const debug = _debug('app:webpack:prod')
const webpackProdConfig = (webpackConfig, config) => {
  /*=============================================
   =            Production Plugins              =
   =============================================*/

  debug('Extracting Css Loaders with the ExtractTextPlugin...')
  cssLoaderAddExtract(webpackConfig, /css/, ExtractTextPlugin)

  debug('Setting up development plugins: DedupePlugin, OccurenceOrderPlugin, and UglifyJsPlugin')
  webpackConfig.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings     : false,
        dead_code    : true,
        unused       : true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true
    })
  )
}

export default webpackProdConfig
