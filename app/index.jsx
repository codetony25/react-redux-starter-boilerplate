import './styles/main.scss'
import './styles/othermain.css'

import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App.jsx'

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)
