import {CHANGE_USERS} from "./users.types";

const initialState = {
    userList: [{name:'John'},],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {


        case CHANGE_USERS:
            return {
                ...state,
                userList: action.payload
            }

        default:
            return state;
    }
};
