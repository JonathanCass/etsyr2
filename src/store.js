import {combineReducers, createStore} from 'redux'
import dataReducer from './reducers/data'

const rootReducer = combineReducers({
  dataReducer
})

const store = createStore(rootReducer)

export default store