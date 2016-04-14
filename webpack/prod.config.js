import path from 'path'
import webpack from 'webpack'

const PATHS = {
	app: path.join(__dirname, '../src'),
	build: path.join(__dirname, '../build'),
}

const webpackProdConfig = {
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			}
		}),
	]
}

export default webpackProdConfig
