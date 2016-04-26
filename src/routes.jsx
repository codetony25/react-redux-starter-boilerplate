import React from 'react'
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router'

import HomeView from './views/HomeView'

// Core Layout
import layout from './layout.jsx'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={layout}>
      <IndexRoute component={HomeView} />
    </Route>
  </Router>
)
