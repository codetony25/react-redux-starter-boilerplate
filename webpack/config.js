import path from 'path'

// Config Helpers
let getPath = (pathParam) => {
  return path.join(__dirname, pathParam)
}

// Custom Webpack Configurations
const CONFIG = {
  env: process.env.NODE_ENV || 'development',
  target: process.env.npm_lifecycle_event,
  appPath:  getPath('../app'),
  distPath: getPath('../dist'),
  rootPath: getPath('../'),
  htmlPath: getPath('../app/index.html'),
  serverHost: 'localhost',
  serverPort: '8080',
}

// Webpack Global Variables
CONFIG.globals = {
  '__DEV__': CONFIG.env === 'development',
  '__PROD__': CONFIG.env === 'production',
}

export default CONFIG