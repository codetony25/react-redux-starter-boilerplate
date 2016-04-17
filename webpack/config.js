import { getPath } from './utils/helpers'

/*=============================================
 =        Custom Webpack Configuration         =
 =============================================*/
const config = {
  env           : process.env.NODE_ENV || 'development',
  target        : process.env.npm_lifecycle_event,
  appPath       : getPath('../src'),
  distPath      : getPath('../dist'),
  rootPath      : getPath('../'),
  htmlPath      : getPath('../src/index.html'),
  serverHost    : 'localhost',
  serverPort    : '8080'
}

/*=============================================
 =        Set Webpack Global Variables         =
 =============================================*/
config.globals = {
  '__DEVELOPMENT__'    : config.env === 'development',
  '__PRODUCTION__'     : config.env === 'production'
}

export default config
