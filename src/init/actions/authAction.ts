import {AuthActionTypes} from '../types/authTypes';
import {authAPI, securityAPI} from '../../api';
import {AppDispatch} from '../index';
import {ResultCodeEnum, ResultCodeForCaptchaEnum} from '../../api/apiTypes';

export const checkLogin = () => async (dispatch: AppDispatch) => {
    const data = await authAPI.me();
    if (localStorage.getItem('isAuth') === null) {
        return dispatch(logOut());
    }
    if (data.resultCode === ResultCodeEnum.Success) {
        const {id, email, login} = data.data;
        dispatch({
            type: AuthActionTypes.CHECK_LOGIN,
            payload: {
                isAuth: true,
                email,
                userId: id,
                login,
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

export const logIn = (
    email: string,
    password: string,
    rememberMe: boolean,
    captchaUrl: string | undefined
) => async (dispatch: AppDispatch) => {
    const data = await authAPI.logIn(email, password, rememberMe, captchaUrl);
    if (data.resultCode === ResultCodeEnum.Success) {
        localStorage.setItem('isAuth', JSON.stringify({...data.data}));
        dispatch({
            type: AuthActionTypes.LOG_IN,
            payload: {
                isAuth: true,
                userId: data.data.userId,
                error: false,
            },
        })
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.Captcha) {
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
    localStorage.setItem('isAuth', '');
    dispatch({
        type: AuthActionTypes.LOG_OUT,
        payload: {},
    })
};

export const getCaptchaUrl = () => async (dispatch: AppDispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch({
        type: AuthActionTypes.GET_CAPTCHA_URL_SUCCESS,
        payload: {
            captchaUrl
        },
    })
}
