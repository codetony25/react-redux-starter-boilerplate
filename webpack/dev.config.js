import webpack from 'webpack'

let webpackDevConfig = (webpackConfig) => {
	webpackConfig.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	)
}

export default webpackDevConfig
