import webpack from 'webpack'
import webpackConfig from '../webpack/webpack.config.js'

let compiler = webpack(webpackConfig)

;(async function() {
  try {
    compiler.run((err, stats) => {
      console.log(stats)
      console.log(err)
    })
  } catch (err) {
    console.log('compiling has failed', err)
  }
})()