import { getPath } from './utils/helpers'

/**
 * Set up Webpack Configurations
 */
const nodeEnv = process.env.NODE_ENV
let devTool

if (nodeEnv === 'development') {
  devTool = 'inline-eval-cheap-source-map'
}
else {
  devTool = 'source-map'
}

/**
 * Custom Webpack Configuration
 */
const config = {
  env: nodeEnv || 'development',
  target: process.env.npm_lifecycle_event,
  appPath: getPath('../src'),
  distPath: getPath('../dist'),
  rootPath: getPath('../'),
  stylePath: getPath('../src/styles/base.css'),
  htmlPath: getPath('../src/index.html'),
  serverHost: 'localhost',
  serverPort: '8080',
  devTool,
}

/**
 * Set Webpack Global Variables
 */
config.globals = {
  __DEVELOPMENT__: config.env === 'development',
  __PRODUCTION__ : config.env === 'production',
}

export default config
