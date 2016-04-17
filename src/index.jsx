import './styles/main.styl'

import React from 'react'
import ReactDom from 'react-dom'
import App from './components/Example'

if (module.hot) {
  module.hot.accept()
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)
