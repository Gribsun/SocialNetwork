import {AuthActionTypes} from '../types/authTypes';
import {authAPI, securityAPI} from '../../api/api';
import {AppDispatch} from '../index';

export const checkLogin = () => async (dispatch: AppDispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        dispatch({
            type: AuthActionTypes.CHECK_LOGIN,
            payload: {
                email,
                userId: id,
                login,
                isAuth: true,
            },
        })
    } else {
        dispatch({
            type: AuthActionTypes.LOG_IN,
            payload: {
                isAuth: false,
            },
        })
    }
};

export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string) =>
    async (dispatch: AppDispatch) => {
        const response = await authAPI.logIn(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch({
                type: AuthActionTypes.LOG_IN,
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
                type: AuthActionTypes.LOG_IN,
                payload: {
                    isAuth: false,
                    error: true,
                },
            })
        }
    };

export const logOut = () => async (dispatch: AppDispatch) => {
    await authAPI.logOut();
    dispatch({
        type: AuthActionTypes.LOG_OUT,
        payload: {},
    })
};


export const getCaptchaUrl = () => async (dispatch: AppDispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch({
        type: AuthActionTypes.GET_CAPTCHA_URL_SUCCESS,
        payload: {
            captchaUrl
        },
    })
}
