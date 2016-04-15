import webpack from 'webpack'
import webpackConfig from '../webpack/webpack.config.js'

let compiler = webpack(webpackConfig)

;(async function() {
  try {
    compiler.run((err, stats) => {
      
    })
  } catch (err) {
    console.log('compiling has failed', err)
  }
})()