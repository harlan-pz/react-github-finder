import { createAction } from 'redux-actions'
import { throws } from 'assert'
import {
  GET_GITHUB_FAIL,
  GET_GITHUB_SUCCESS,
  GET_GITHUB_INITIATE,
  CHAGE_USER_NAME
} from '../constants/actionTypes'

const github = (userName = 'Harlan-ZhangDongXing') => (dispatch) => {
  dispatch({ type: GET_GITHUB_INITIATE })
  fetch(`https://api.github.com/users/${userName}`)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error()
    })
    .then((json) => {
      dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: json } })
    })
    .catch((err) => {
      dispatch({ type: GET_GITHUB_FAIL })
    })
}

const changeUserName = createAction(CHAGE_USER_NAME, text => ({
  payload: text
}))

export {
  github,
  changeUserName
}
