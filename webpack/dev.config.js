import webpack from 'webpack'

let webpackDevConfig = (webpackConfig, CONFIG) => {
	webpackConfig.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	)
}

export default webpackDevConfig
