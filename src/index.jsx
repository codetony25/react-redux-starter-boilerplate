import React from 'react'
import ReactDom from 'react-dom'
import Root from './routes.jsx'

if (module.hot) {
  module.hot.accept()
}

ReactDom.render(
  <Root />,
  document.getElementById('app')
)
