import { createStore } from 'redux'
import rootReducer from './bundles'

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState)
}
