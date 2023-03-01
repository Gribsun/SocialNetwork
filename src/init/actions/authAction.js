import {AuthTypes} from '../types/authTypes';
import {authAPI, securityAPI} from '../../api/api';

export const checkLogin = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        dispatch({
            type: AuthTypes.CHECK_LOGIN,
            payload: {
                email,
                userId: id,
                login,
                isAuth: true,
                error: false,
            },
        })
    } else {
        dispatch({
            type: AuthTypes.LOG_IN,
            payload: {
                isAuth: false,
                error: true,
            },
        })
    }
};

export const logIn = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.logIn(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch({
            type: AuthTypes.LOG_IN,
            payload: {
                isAuth: true,
                error: false,
            },
        })
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        dispatch({
            type: AuthTypes.LOG_IN,
            payload: {
                isAuth: false,
                error: true,
            },
        })
    }
};

export const logOut = () => async (dispatch) => {
    await authAPI.logOut();
    dispatch({
        type: AuthTypes.LOG_OUT,
    })
};

export const initializedSuccess = () => async (dispatch) => {
    dispatch({
        type: AuthTypes.INITIALIZED_SUCCESS,
        payload: {
            initialized: true,
        },
    })
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch({
        type: AuthTypes.GET_CAPTCHA_URL_SUCCESS,
        payload: captchaUrl,
    })
}
