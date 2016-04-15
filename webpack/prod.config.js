import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

let webpackProdConfig = (CONFIG) => {
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
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
				}
			}),
		]
	}
}

export default webpackProdConfig
