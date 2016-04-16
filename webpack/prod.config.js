import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { cssLoaderAddExtract } from './utils/helpers'

let webpackProdConfig = (webpackConfig, CONFIG) => {

  /*=============================================
   =            Production Plugins              =
   =============================================*/

  // In production we use different css loaders to extract css
  cssLoaderAddExtract(webpackConfig, /css/, ExtractTextPlugin)

  webpackConfig.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings     : false,
        dead_code    : true,
        unused       : true,
      }
    }),
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true,
    })
  )
}

export default webpackProdConfig
