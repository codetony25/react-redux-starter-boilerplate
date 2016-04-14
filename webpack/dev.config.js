import webpack from 'webpack'
import path from 'path'
import NpmInstallPlugin from 'npm-install-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const PATHS = {
	app: path.join(__dirname, '../src'),
	build: path.join(__dirname, '../build'),
}

console.log('PATHS', PATHS.index);

const webpackDevConfig = {
	devServer: {
		contentBase: PATHS.build,
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		stats: 'errors-only',
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../src/index.html'),
			filename: 'index.html',
			inject: 'body',
			minify: {
				collapseWhitespace: true,
			},
		}),
		new webpack.HotModuleReplacementPlugin(),
		new NpmInstallPlugin(({
			save: true,
		}))
	]
}

export default webpackDevConfig
