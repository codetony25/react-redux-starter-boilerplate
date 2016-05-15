import path from 'path'
import fs from 'fs'

/**
 * Webpack Configuration Helpers
 */

// Gets directory path
export const getPath = (pathParam) => {
  return path.join(__dirname, `../${pathParam}`)
}

// Replaces css loader with the extract plugin css loader
export const cssLoaderAddExtract = (config, searchParam, plugin) => {
  config.module.loaders.filter((loader) => {
    return loader.loaders && loader.loaders.find((name) => {
      return searchParam.test(name.split('?')[0])
    })
  }).forEach((cssLoader) => {
    const [first, ...rest] = cssLoader.loaders
    let singleCssLoader = cssLoader.loader
    singleCssLoader = plugin.extract(first, rest.join('!'))
    return singleCssLoader
  })
}
