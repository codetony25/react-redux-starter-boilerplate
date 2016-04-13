import path from 'path'
import merge from 'webpack-merge'

import webpackDevConfig from './dev.config'
import webpackProdConfig from './prod.config'

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

const PATHS = {
	app: path.join(__dirname, '../src'),
	build: path.join(__dirname, '../build')
}

const config = {
	entry: [
		'webpack-hot-middleware/client',
		PATHS.app,
	],

	output: {
		path: PATHS.build,
		filename: 'bundle.js',
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	module: {
		loaders: [
			{
				text: /\.jsx?$/,
				loaders: ['babel?cacheDirectory'],
				include: PATHS.app,
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: PATHS.app,
			}
		],
	}
};

if(TARGET === 'start' || !TARGET) {
	module.exports = merge(config, webpackDevConfig);
}

if(TARGET === 'build') {
	module.exports = merge(config, webpackProdConfig)
}

export default config