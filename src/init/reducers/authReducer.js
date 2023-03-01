import {AuthTypes} from '../types/authTypes';

const initialState = {
    initialized: false,
    email: null,
    userId: null,
    login: null,
    isAuth: false,
    error: false,
    captchaUrl: null,
}

export const authReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case AuthTypes.CHECK_LOGIN: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case AuthTypes.LOG_IN: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case AuthTypes.LOG_OUT: {
            return {
                ...state,
                email: null,
                userId: null,
                login: null,
                isAuth: false,
                error: false,
            }
        }
        case AuthTypes.INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: action.payload.initialized,
            }
        }
        case AuthTypes.GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.payload,
            }
        }
        default:
            return state;
    }
}
