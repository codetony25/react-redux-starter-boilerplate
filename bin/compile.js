import webpack from 'webpack'
import _debug from 'debug'
import chalk from 'chalk'
import webpackConfig from '../webpack/webpack.config.js'

const debug = _debug('app:bin:compile')
const compiler = webpack(webpackConfig)

/**
 * Runs the webpack compiler
 */

try {
  compiler.run((error, stats) => {
    let jsonStats = stats.toJson(),
        errorLength = chalk.red.bold(jsonStats.errors.length),
        warningLength = chalk.red.bold(jsonStats.warnings.length)

    if (error) {
      debug('Error has occured while compiling', error)
    }

    if (stats.hasErrors()) {
      debug(`There has been ${errorLength} errors while compiling`, jsonStats.errors)
    }
    else if (stats.hasWarnings()) {
      debug(`There are ${warningLength} warnings while compiling`, jsonStats.warnings)
    }
    else {
      debug('No warnings or errors while compiling')
      debug('Webpack build has successfully finished!')
    }
  })
}
catch (error) {
  debug('compiling has failed', error)
}
