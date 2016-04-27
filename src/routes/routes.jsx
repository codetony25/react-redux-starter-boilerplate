import React from 'react'
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router'

import Home from './Home'

// Core Layout
import layout from '../layouts'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={layout}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)
