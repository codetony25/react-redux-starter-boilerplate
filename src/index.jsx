import './styles/main.styl'

import React from 'react'
import ReactDom from 'react-dom'
import Root from './routes.jsx'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'


if (module.hot) {
  module.hot.accept()
}


ReactDom.render(
  <Root />,
  document.getElementById('app')
)