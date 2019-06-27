import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import githubReducer from '../reducer/reducer'

const store = createStore(
  githubReducer,
  applyMiddleware(reduxThunk)
)
export default store
