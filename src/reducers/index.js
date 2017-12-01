import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  userLogin: loginReducer,
});

export default rootReducer;
