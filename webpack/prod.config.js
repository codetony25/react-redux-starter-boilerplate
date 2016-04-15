import webpack from 'webpack'

let webpackProdConfig = (webpackConfig) => {
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

export default webpackProdConfig
