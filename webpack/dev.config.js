import webpack from 'webpack'
import NpmInstallPlugin from 'npm-install-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

let webpackDevConfig = (CONFIG) => {
	return {
		devServer: {
			contentBase: CONFIG.buildPath,
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,
			headers: {'Access-Control-Allow-Origin': '*'},
			stats: {colors: true},
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: CONFIG.htmlPath,
				hash: false,
				filename: 'index.html',
				inject: 'body',
				minify: {
					collapseWhitespace: true
				},
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin(),
			new NpmInstallPlugin(({
				save: true,
			}))
		]
	}
}

export default webpackDevConfig
