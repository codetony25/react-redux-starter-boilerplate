import { getPath } from './utils/helpers'

/**
 * Custom Webpack Configuration
 *
 * @type {Object}
 */
const config = {
  env       : process.env.NODE_ENV || 'development',
  target    : process.env.npm_lifecycle_event,
  appPath   : getPath('../src'),
  distPath  : getPath('../dist'),
  rootPath  : getPath('../'),
  stylePath : getPath('../src/styles/base.sss'),
  htmlPath  : getPath('../src/index.html'),
  iconPath  : getPath('../node_modules/react-icons'),
  serverHost: 'localhost',
  serverPort: '8080',
}

/**
 * Set Webpack Global Variables
 *
 * @type {Object}
 */
config.globals = {
  __DEVELOPMENT__:  config.env === 'development',
  __PRODUCTION__ :  config.env === 'production',
}

export default config
