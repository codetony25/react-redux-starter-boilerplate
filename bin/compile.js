import webpack from 'webpack'
import _debug from 'debug'
import webpackConfig from '../webpack/webpack.config.js'

const debug = _debug('app:bin:compile')
const compiler = webpack(webpackConfig)

/**
 * Runs the webpack compiler
 */
function runCompiler() {
  try {
    compiler.run((error) => {
      debug('Webpack compile has finished')
      if (error) {
        debug('Error has occured while compiling', error)
      }
      else {
        debug('No warnings or errors while compiling')
      }
    })
  }
  catch (error) {
    debug('compiling has failed', error)
  }
}

runCompiler()
