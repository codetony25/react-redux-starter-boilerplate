import path from 'path'

// Custom Webpack Configurations
const CONFIG = {
  env: process.env.NODE_ENV || 'development',
  target: process.env.npm_lifecycle_event,
  appPath:  path.join(__dirname, '../app'),
  buildPath: path.join(__dirname, '../dist'),
  htmlPath: path.join(__dirname, '../app/index.html'),
  serverHost: 'localhost',
  serverPort: '8080',
}

// Webpack Global Variables
CONFIG.globals = {
  '__DEV__': CONFIG.env === 'development',
  '__PROD__': CONFIG.env === 'production',
}

export default CONFIG