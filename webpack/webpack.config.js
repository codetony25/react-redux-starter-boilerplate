import webpack from 'webpack'
import rucksack from 'rucksack-css'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CONFIG from './config.js'

const {
	__DEV__,
	__PROD__,
} = CONFIG.globals

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

// Javascript and JSON Loaders
webpackConfig.module.loaders = [
	{
		test: /\.jsx?$/,
		include: CONFIG.appPath,
		loader: 'babel-loader?cacheDirectory',
	},
	{
		test: /\.json$/,
		loaders: ['json'],
	},
]

// Style Loaders
webpackConfig.module.loaders.push(
	{
		test: /\.scss$/,
		loaders: [
			'style',
			'css',
			'postcss',
			'sass?sourceMap',
		],
		include: CONFIG.appPath,
	},
	{
		test: /\.css$/,
		loaders: [
			'style',
			'css',
			'postcss',
		],
		include: CONFIG.appPath,
	},
)

// Postcss config
webpackConfig.postcss = [
	rucksack({
		autoprefixer: true,
		fallbacks: true,
	})
]

// File loaders
webpackConfig.module.loaders.push(
	{
		test: /\.txt$/,
		loader: 'raw-loader',
	},
	{
		test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
		loader: 'url-loader',
		query: {
			name: '[path][name].[ext]?[hash]',
			limit: 10000,
		},
	},
)

// Plugin Configurations
webpackConfig.plugins = [
	new HtmlWebpackPlugin({
		template: CONFIG.htmlPath,
		hash: false,
		filename: 'index.html',
		inject: 'body',
		minify: {
			collapseWhitespace: true
		},
	}),
]

// Development Plugins
if (__DEV__) {
	webpackConfig.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	)
}

// Production Plugins
if (__PROD__) {
	webpackConfig.plugins.push(
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			}
		}),
	)
}

export default webpackConfig
