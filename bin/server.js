import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack/webpack.config.js'

const app = express()
const router = express.Router()
const compiler = webpack(webpackConfig)

app.use(webpackMiddleware(compiler, {
  publicPath    : webpackConfig.output.publicPath,
  quiet         : false,
  noInfo        : false,
  hot           : true,
  inline        : true,
  lazy          : false,
  headers       : { 'Access-Control-Allow-Origin': '*' },
  stats         : { chunks : false, chunkModules : false, colors : true }
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}))

router.get('/', (req, res) => {
  res.render('../dist/index.html')
})

app.use(router)

app.listen(8080, (err) => {
  !err ? console.log('Running on localhost 8080!!!') : console.error('Error while listining to 8080', err)
})
