import path from 'path'

/*=============================================
 =        Webpack Configuration Helpers        =
 =============================================*/

// Gets directory path
export let getPath = (pathParam) => {
  return path.join(__dirname, `../${pathParam}`)
}

// Replaces loader with the extract plugin css loader
export const cssLoaderAddExtract = (config, searchParam, plugin) => {
  config.module.loaders.filter((loader) =>
    loader.loaders && loader.loaders.find((name) => {
      return searchParam.test(name.split('?')[0])
    })
  ).forEach((cssLoader) => {
    const [first, ...rest] = cssLoader.loaders
    cssLoader.loader = plugin.extract(first, rest.join('!'))
  })
}