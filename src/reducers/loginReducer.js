import * as types from '../actions/actionTypes';

const initialState = {
  user = {
    id = 0,
    userName = "",
    firstName = "",
    lastName = "",
    company = "",
  },
  token = '',
  message = '',
  loginStatus = false,
}

export default function(state = initialState, action) {
  switch(action.type){
    case types.AUTH_SUCCESS:
      const { user } = action.payload;
      return Object.assign({}, state, {
        user = [
          ...state.user,{
            id = user.UserID,
            userName = user.UserName,
            firstName = user.FirstName,
            lastName = user.LastName,
            company = user.Company,
          }
        ]
      })
    default:
      return state;
  }
}