import path from 'path'
import merge from 'webpack-merge'
import webpack from 'webpack'
import NpmInstallPlugin from 'npm-install-webpack-plugin'

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
		]
	}
};

if(TARGET === 'start' || !TARGET) {
	module.exports = merge(config, {
		devtool: 'eval-source-map',
		devServer: {
			contentBase: PATHS.build,
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,
			stats: 'errors-only',
		},

		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new NpmInstallPlugin(({
				save: true,
			}))
		]
	});
}

if(TARGET === 'build') {
	module.exports = merge(config, {})
}