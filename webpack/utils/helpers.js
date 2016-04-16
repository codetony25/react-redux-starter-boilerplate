import path from 'path'

// Config Helpers
export let getPath = (pathParam) => {
  return path.join(__dirname, `../${pathParam}`)
}
