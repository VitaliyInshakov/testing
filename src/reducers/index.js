import { combineReducers } from 'redux';
import authReducer from './authentication';
import usersReducer from './users';

const rootReducer = combineReducers({
  authenticated: authReducer, 
  users: usersReducer
});

export default rootReducer;