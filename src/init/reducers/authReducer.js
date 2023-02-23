import {AuthTypes} from '../types/authTypes';

const initialState = {
    userId: null,
    login: null,
    isAuth: false,
}

export const authReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case AuthTypes.SET_USER_DATA: {
            return {
                ...state,
            }
        }
        case AuthTypes.CHECK_LOGIN: {
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        }
        case AuthTypes.LOG_IN: {
            return {
                ...state,
                isAuth: true,
            }
        }
        case AuthTypes.LOG_OUT: {
            return {
                ...state,
                userId: null,
                login: null,
                isAuth: false,
            }
        }
        default:
            return state;
    }
}
