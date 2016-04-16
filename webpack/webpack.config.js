import HtmlWebpackPlugin from 'html-webpack-plugin'
import rucksack from 'rucksack-css'
import CONFIG from './config.js'

import webpackDevConfig from './dev.config.js'
import webpackProdConfig from './prod.config.js'

// Global Variables
const {
	__DEV__,
	__PROD__,
} = CONFIG.globals

// Webpack Configurations
const webpackConfig = {
	target     : 'web',
	devtool    : 'source-map',
	node       : { fs: 'empty' },
	resolve    : { extensions: ['', 'json', '.js', '.jsx'] },
	module     : {},
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
	path          : CONFIG.distPath,
	filename      : 'bundle.js',
	publicPath    : `http://${CONFIG.serverHost}:${CONFIG.serverPort}/`,
}

// Javascript and JSON Loaders
webpackConfig.module.loaders = [
	{
		test       : /\.jsx?$/,
		include    : CONFIG.appPath,
		loader     : 'babel-loader?cacheDirectory',
	},
	{
		test       : /\.json$/,
		loaders    : ['json'],
	},
]

// Style Loaders
webpackConfig.module.loaders.push(
	{
		test       : /\.scss$/,
		loaders    : [ 'style', 'css', 'postcss', 'sass?sourceMap'],
		include    : CONFIG.appPath,
	},
	{
		test       : /\.css$/,
		loaders    : ['style', 'css', 'postcss'],
		include    : CONFIG.appPath,
	},
)

// Postcss config
webpackConfig.postcss = [
	rucksack({
		autoprefixer    : true,
		fallbacks       : true,
	})
]

// File loaders
webpackConfig.module.loaders.push(
	{
		test      : /\.txt$/,
		loader    : 'raw-loader',
	},
	{
		test      : /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
		loader    : 'url-loader',
		query: {
			name     : '[path][name].[ext]?[hash]',
			limit    : 10000,
		},
	},
)

// Plugin Configurations
webpackConfig.plugins = [
	new HtmlWebpackPlugin({
		template    : CONFIG.htmlPath,
		hash        : false,
		filename    : 'index.html',
		inject      : 'body',
		minify: {
			collapseWhitespace: true,
		},
	}),
]

// Development only Configuarations
if (__DEV__) {
	webpackDevConfig(webpackConfig, CONFIG)
}

// Production only Configuartions
if (__PROD__) {
	webpackProdConfig(webpackConfig, CONFIG)
}

export default webpackConfig
