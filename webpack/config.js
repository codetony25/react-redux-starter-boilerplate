import { getPath } from './utils/helpers'

/**
 * Set up Webpack Configurations
 */
const nodeEnv = process.env.NODE_ENV

let isNodeEnvironmentDevelopment = (nodeEnv === 'development'),
    isNodeEnvironmentProduction = (nodeEnv === 'production'),
    devTool = (nodeEnv === 'development' ? 'cheap-module-source-map' : 'source-map')

/**
 * Custom Webpack Configuration
 */
const config = {
  env: nodeEnv || 'development',
  target: process.env.npm_lifecycle_event,
  cache: isNodeEnvironmentDevelopment ? true : false,
  appPath: getPath('../src'),
  distPath: getPath('../dist'),
  rootPath: getPath('../'),
  stylePath: getPath('../src/styles/base.css'),
  htmlPath: getPath('../src/index.html'),
  serverHost: 'localhost',
  serverPort: '8080',
  devTool,
  globals: {
    __DEVELOPMENT__: isNodeEnvironmentDevelopment,
    __PRODUCTION__ : isNodeEnvironmentProduction,
  }
}

export default config
