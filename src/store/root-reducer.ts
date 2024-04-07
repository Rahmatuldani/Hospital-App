import { combineReducers } from 'redux';
import { usersReducer } from './user/reducer';
import { authReducer } from './auth/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
});

export default rootReducer;