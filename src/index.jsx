import React from 'react'
import ReactDom from 'react-dom'
import Root from './routes'

if (module.hot && __DEVELOPMENT__) {
  module.hot.accept()
}

ReactDom.render(
  <Root />,
  document.getElementById('app')
)
