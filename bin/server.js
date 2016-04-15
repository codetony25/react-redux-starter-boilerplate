import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack/webpack.config.js'

let app = express()
let compiler = webpack(webpackConfig)

app.use(express.static(__dirname + '../build'))
app.use(webpackMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))
app.get('*', function response(req, res) {
	res.sendFile(path.join(__dirname, '../build/index.html'))
});

app.listen(8080, () => {
	console.log('Running on localhost 8080!')
});