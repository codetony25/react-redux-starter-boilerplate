import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

let webpackDevConfig = (CONFIG) => {
	return {
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
		]
	}
}

export default webpackDevConfig
