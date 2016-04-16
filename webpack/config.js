import { getPath } from './utils/helpers'

/*=============================================
 =        Custom Webpack Configuration         =
 =============================================*/
const CONFIG = {
  env           : process.env.NODE_ENV || 'development',
  target        : process.env.npm_lifecycle_event,
  appPath       : getPath('../app'),
  distPath      : getPath('../dist'),
  rootPath      : getPath('../'),
  htmlPath      : getPath('../app/index.html'),
  serverHost    : 'localhost',
  serverPort    : '8080',
}

/*=============================================
 =        Set Webpack Global Variables         =
 =============================================*/
CONFIG.globals = {
  '__DEV__'     : CONFIG.env === 'development',
  '__PROD__'    : CONFIG.env === 'production',
}

export default CONFIG
