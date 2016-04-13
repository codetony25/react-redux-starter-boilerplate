import webpack from 'webpack'
import path from 'path'
import NpmInstallPlugin from 'npm-install-webpack-plugin'

const PATHS = {
	app: path.join(__dirname, '../src'),
	build: path.join(__dirname, '../build'),
}

const webpackDevConfig = {
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
}

export default webpackDevConfig