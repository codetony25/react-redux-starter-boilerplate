import React from 'react'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from '../store/create'
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
} from 'react-router'

// Views
import Home from './Home'

// Layouts
import CoreLayout from '../layouts'

const store = createStore({})
const history = syncHistoryWithStore(browserHistory, store)

export default () => {
  return (
	<Provider store={store} history={history}>
	  <Router history={browserHistory}>
		<Route path="/" component={CoreLayout}>
		  <IndexRoute component={Home} />
		</Route>
	  </Router>
	</Provider>
  )
}
