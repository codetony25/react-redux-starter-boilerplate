import koa from 'koa'
import webpack from 'webpack'
import config from '../webpack/config'
import _debug from 'debug'
import webpackDevMiddleware from 'koa-webpack-dev-middleware'
import webpackHotMiddleware from 'koa-webpack-hot-middleware'
import webpackConfig from '../webpack/webpack.config'

const debug = _debug('app:bin:server')
const app = koa()
const compiler = webpack(webpackConfig)

debug('Booting up server...')

/**
 * Webpack Middleware Configuarations
 */
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: false,
  noInfo: false,
  hot: true,
  inline: true,
  lazy: false,
  historyApiFallback: true,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true,
  },
}))

/**
 * Webpack Hot Middleware Configuarations
 */
app.use(webpackHotMiddleware(compiler))

/**
 * Server port listining
 */
app.listen(config.serverPort, (error) => {
  if (error) {
    debug(`Error while listining to ${config.serverPort}`, error)
  }
})
