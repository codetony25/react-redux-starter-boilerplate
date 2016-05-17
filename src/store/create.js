import { createStore, compose } from 'redux'
import rootReducer from './reducers'

export default (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState
    )

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const reducers = require('./reducers').default
            store.replaceReducer(reducers)
        })
    }

    return store
}