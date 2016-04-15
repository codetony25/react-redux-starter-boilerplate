import webpack from 'webpack'
import CleanPlugin from 'clean-webpack-plugin'

let webpackProdConfig = (webpackConfig, CONFIG) => {
	webpackConfig.plugins.push(
		new CleanPlugin([CONFIG.distPath], {
			root: CONFIG.rootPath,
			verbose: true,
			dry: true,
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				dead_code: true,
				unused: true,
			}
		}),
	)
}

export default webpackProdConfig
