import path from 'path'
import merge from 'webpack-merge'
import cssnano from 'cssnano'

import webpackDevConfig from './dev.config'
import webpackProdConfig from './prod.config'

// Custom Webpack Configurations
const CONFIG = {
	env: process.env.NODE_ENV || 'development',
	target: process.env.npm_lifecycle_event,
	appPath:  path.join(__dirname, '../app'),
	buildPath: path.join(__dirname, '../build'),
	htmlPath: path.join(__dirname, '../app/index.html'),
	serverHost: 'localhost',
	serverPort: '8080'
}

// Webpack Configurations
const webpackConfig = {
	target: 'web',
	devtool: 'source-map',
	node: {
		fs: 'empty',
	},
	resolve: {
		extensions: ['', 'json', '.js', '.jsx'],
	},
	module: {},
}

// Entry Points For App
webpackConfig.entry = {
	app: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		CONFIG.appPath,
	],
}

// Bundle Distanation outputs
webpackConfig.output = {
	path: '/',
	filename: 'bundle.js',
	publicPath: `http://${CONFIG.serverHost}:${CONFIG.serverPort}/`,
}

// Loaders
webpackConfig.module.loaders = [
	{
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel-loader?cacheDirectory',
	},
	{
		test: /\.json$/,
		loaders: ['json'],
	},
	{
		test: /\.[s]css$/,
		loaders: ['style', 'css', 'postcss', 'sass?sourceMap'],
		include: CONFIG.appPath,
	},
	{
		test: /\.(otf|eot|ttf|woff|png|jpe?g|txt)/i,
		loader: 'url-loader?limit=10000',
		include: CONFIG.appPath,
	},
]

// Postcss config
webpackConfig.postcss = [
	cssnano({
		autoprefixer: {
			add: true,
			remove: true,
			browsers: ['last 2 versions'],
		},
		discardComments: {
			removeAll: true,
		},
		discardUnused: true,
		mergeIdents: false,
		reduceIdents: false,
		safe: true,
		sourcemap: true,
	})
]

// Merges webpack developement configurations
if(CONFIG.target === 'start' || !CONFIG.target) {
	module.exports = merge(webpackConfig, webpackDevConfig(CONFIG))
}

// Merges webpack production configurations
if(CONFIG.target === 'build' && CONFIG.env === 'production') {
	module.exports = merge(webpackConfig, webpackProdConfig(CONFIG))
}

export default webpackConfig
