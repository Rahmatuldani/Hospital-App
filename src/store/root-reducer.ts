import { combineReducers } from 'redux';
import { usersReducer } from './user/reducer';

const rootReducer = combineReducers({
    users: usersReducer,
});

export default rootReducer;