import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack/webpack.config.js'

let app = express()
let router = express.Router()
let compiler = webpack(webpackConfig)

app.use(webpackMiddleware(compiler, {
	publicPath    : webpackConfig.output.publicPath,
	quiet         : true,
	noInfo        : true,
	hot           : true,
	inline        : true,
	lazy          : false,
	headers       : { 'Access-Control-Allow-Origin': '*' },
	stats         : { colors: true },
}))

app.use(webpackHotMiddleware(compiler, {
	log: console.log,
}))

router.get('/', (req, res) => {
	res.render('../dist/index.html')
})

app.use(router)


app.listen(8080, () => {
	console.log('Running on localhost 8080!')
})
