import path from 'path'
import merge from 'webpack-merge'

import webpackDevConfig from './dev.config'
import webpackProdConfig from './prod.config'

process.env.BABEL_ENV = TARGET;

const PATHS = {
	app: path.join(__dirname, '../src'),
	build: path.join(__dirname, '../build')
}
const TARGET = process.env.npm_lifecycle_event;
const config = {
	env: process.env.NODE_ENV || 'development',
}

console.log('env', config.env);

const webpackConfig = {
	devtool: 'source-map',
	node: {
		fs: 'empty',
	},
	resolve: {
		extensions: ['', 'json', '.js', '.jsx'],
	},
	module: {},
}

webpackConfig.entry = {
	app: config.env === 'development' ? ['webpack-hot-middleware/client', PATHS.app] : [PATHS.app],
}

webpackConfig.output = {
	path: PATHS.build,
	filename: 'bundle.js',
}

webpackConfig.module.loaders = [
	{
		text: /\.jsx?$/,
		loaders: ['babel?cacheDirectory'],
		include: PATHS.app,
	},
	{
		test: /\.css$/,
		loaders: ['style', 'css'],
		include: PATHS.app,
	},
]

console.log(webpackConfig);

if(TARGET === 'start' || !TARGET) {
	module.exports = merge(webpackConfig, webpackDevConfig);
}

if(TARGET === 'build') {
	module.exports = merge(webpackConfig, webpackProdConfig)
}

export default webpackConfig
