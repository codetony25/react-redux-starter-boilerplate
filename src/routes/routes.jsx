import React from 'react'
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
} from 'react-router'

import Home from './Home'

// Layouts
import CoreLayout from '../layouts'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={CoreLayout}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  )
}
