import * as types from './actionTypes';
import { LoginApi } from '../api';

export function loginAuthenSuccess(user){
  return { type: types.AUTH_SUCCESS, payload: user}
}

export function loginAuthenError(error) {
  return { type: types.AUTH_ERROR, payload: error}
}

export function loginAuthen(user) {
  return function(dispatch) {
    return LoginApi.postLoginAuthen(user)
      .then(callback => {
        dispatch(loginAuthenSuccess(callback));
      })
      .catch(error => {
        dispatch(loginAuthenError(error));
      })
  }
}