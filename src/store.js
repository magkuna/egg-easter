import { createStore, combineReducers } from 'redux'

import egg from './state/egg'

const rootReducer = combineReducers({
    egg
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)