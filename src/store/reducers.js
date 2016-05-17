import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Modules
import counter from '../routes/Home/modules/counter'

const rootReducer = combineReducers({
  counter,
  routing: routerReducer
})

export default rootReducer