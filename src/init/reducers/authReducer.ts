import {AuthActionTypes, IAuthState} from '../types/authTypes';
import {AnyAction} from 'redux';

const initialState: IAuthState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
    error: false,
    captchaUrl: null,
}

export const authReducer = (
    state = initialState,
    action: AnyAction
): IAuthState => {
    switch (action.type) {
        case AuthActionTypes.CHECK_LOGIN: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case AuthActionTypes.LOG_IN: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case AuthActionTypes.LOG_OUT: {
            return {
                ...state,
                email: null,
                userId: null,
                login: null,
                isAuth: false,
                error: false,
            }
        }
        case AuthActionTypes.GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}
