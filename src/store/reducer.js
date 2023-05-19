import { combineReducers } from 'redux';
import {adminReducer} from "./admin/admin.reducer";
import {usersReducer} from "./users/users.reducer";


export const reducer = combineReducers({
    usersReducer,

});