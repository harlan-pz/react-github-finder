import { handleActions } from 'redux-actions'
import {
  GET_GITHUB_SUCCESS,
  GET_GITHUB_FAIL,
  GET_GITHUB_INITIATE
} from '../constants/actionTypes'

const githubReducer = handleActions({
  [GET_GITHUB_SUCCESS]: (state, action) => ({
    data: action.payload.data,
    isLoading: false,
    isSuccess: true
  }),
  [GET_GITHUB_FAIL]: (state, actinon) => ({
    data: state.data,
    isLoading: false,
    isSuccess: false
  }),
  [GET_GITHUB_INITIATE]: (state, actinon) => ({
    data: state.data,
    isLoading: true,
    isSuccess: false
  })
}, {
  data: '',
  isLoading: true,
  isSuccess: false
})

export default githubReducer
