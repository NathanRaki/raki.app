import { combineReducers } from "@reduxjs/toolkit";
import * as actionTypes from "../actions/types";
import AuthService from "../services/auth.service";

const user = AuthService.getCurrentUser();
const initialUserState = {
    currentUser: user ? user : null,
    isLoading: !user
};

const user_reducer = (state = initialUserState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                currentUser: action.payload.currentUser,
                isLoading: false
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    user: user_reducer
});

export default rootReducer;