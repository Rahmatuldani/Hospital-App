import { combineReducers } from 'redux';
import { usersReducer } from './user/reducer';
import { authReducer } from './auth/reducer';
import { patientsReducer } from './patient/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    patients: patientsReducer,
});

export default rootReducer;