import './styles/main.styl'

import React from 'react'
import ReactDom from 'react-dom'
import Router from './routes.jsx'


if (module.hot) {
  module.hot.accept()
}

ReactDom.render(
  <Router />,
  document.getElementById('app')
)
