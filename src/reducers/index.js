import { combineReducers } from 'redux';
import authReducer from './authentication';

const rootReducer = combineReducers({
  authenticated: authReducer
});

export default rootReducer;