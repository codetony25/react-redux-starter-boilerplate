import webpack from 'webpack'
import _debug from 'debug'
import webpackConfig from '../webpack/webpack.config.js'

const debug = _debug('app:bin:compile')
let compiler = webpack(webpackConfig)
runCompiler()

function runCompiler() {
  try {
    compiler.run((error, stats) => {
      debug('Webpack compile has finished')
      if (error) {
        debug('Error has occured while compiling', error)
      } else {
        debug('No warnings or errors while compiling')
      }
    })
  } catch (error) {
    debug('compiling has failed', error)
  }
}
