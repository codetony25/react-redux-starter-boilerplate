import React from 'react'
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router'

// Components
import Example from './components/Example'

// Views
import ExampleView from './views/ExampleView'
import HomeView from './views/HomeView'

// Layouts
import CoreLayout from './layouts/CoreLayout'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={CoreLayout}>
        <IndexRoute path="/home" component={HomeView} />
        <Route path="/exampleview" component={ExampleView} />
        <Route path="/example" component={Example} />
      </Route>
    </Router>
  )
}