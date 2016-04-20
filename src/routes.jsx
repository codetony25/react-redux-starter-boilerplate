import React from 'react'
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router'

import HomeView from './views/HomeView'

// Layouts
import CoreLayout from './layouts/CoreLayout'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={CoreLayout}>
      <IndexRoute component={HomeView} />
    </Route>
  </Router>
)

