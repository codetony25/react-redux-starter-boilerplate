import webpack from 'webpack'
import _debug from 'debug'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'

const debug = _debug('app:webpack:dev')

/**
 * Development Plugins
 */
const webpackDevConfig = (webpackConfig, config) => {
  debug('Setting up development plugins')
  webpackConfig.plugins.push(
    new BrowserSyncPlugin(
      {
        host: config.serverHost,
        port: config.serverPort,
        proxy: `http://${config.serverHost}:${config.serverPort}/`,
      },
      {
        reload: false,
      },
    ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  )
}

export default webpackDevConfig
