import webpack from 'webpack'

let webpackDevConfig = (webpackConfig, CONFIG) => {

  /*=============================================
   =            Development Plugins              =
   =============================================*/

  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  )

}

export default webpackDevConfig
