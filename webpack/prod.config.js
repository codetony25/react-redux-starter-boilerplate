import webpack from 'webpack'
import CleanPlugin from 'clean-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

let webpackProdConfig = (webpackConfig, CONFIG) => {
	// Production plugins
	webpackConfig.plugins.push(
		new CleanPlugin([CONFIG.distPath], {
			root       : CONFIG.rootPath,
			verbose    : true,
			dry        : true,
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings     : false,
				dead_code    : true,
				unused       : true,
			}
		}),
	)

// In production we use different css loaders to extract css
	webpackConfig.module.loaders.filter((loader) =>
		loader.loaders && loader.loaders.find((name) => {
			return /css/.test(name.split('?')[0])
		})
	).forEach((cssLoader) => {
		const [first, ...rest] = cssLoader.loaders
		cssLoader.loader = ExtractTextPlugin.extract(first, rest.join('!'))
	})

	webpackConfig.plugins.push(
		new ExtractTextPlugin('[name].[contenthash].css', {
			allChunks: true,
		})
	)
}

export default webpackProdConfig
