import webpack from 'webpack'
import webpackConfig from '../webpack/webpack.config.js'

let compiler = webpack(webpackConfig)

;(async function() {
  try {
    compiler.run((err, stats) => {
      if (err) {
        console.log("Error has occured while compiling", err)
      }
    })
  } catch (err) {
    console.log('compiling has failed', err)
  }
})()