import webpack from 'webpack'
import _debug from 'debug'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { cssLoaderAddExtract } from './utils/helpers'

const debug = _debug('app:webpack:prod')

/**
 * Production Plugins
 */
const productionConfig = (webpackConfig) => {
  debug('Extracting Css Loaders with the ExtractTextPlugin...')
  cssLoaderAddExtract(webpackConfig, /css/, ExtractTextPlugin)

  debug('Setting up development plugins')
  webpackConfig.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        dead_code: true,
        unused: true,
        screw_ie8: true,
        sequences: true,
        conditionals: true,
        booleans: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js',
      minChunks: Infinity,
    }),
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true,
    })
  )
}

export default productionConfig
