import express from 'express'
import webpack from 'webpack'
import config from '../webpack/config'
import _debug from 'debug'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack/webpack.config'

const debug = _debug('app:bin:server')
const app = express()
const compiler = webpack(webpackConfig)

debug('Booting up server...')
app.use(webpackMiddleware(compiler, {
  publicPath    : webpackConfig.output.publicPath,
  quiet         : false,
  noInfo        : false,
  hot           : true,
  inline        : true,
  lazy          : false,
  historyApiFallback: true,
  headers       : { 'Access-Control-Allow-Origin': '*' },
  stats         : { chunks : false, chunkModules : false, colors : true }
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}))

app.listen(config.serverPort, (err) => {
  !err ? debug(`Running on ${config.serverHost}:${config.serverPort}!`) : debug(`Error while listining to ${config.serverPort}`, err)
})
