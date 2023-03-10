export enum AuthActionTypes {
    LOG_IN = 'LOG_IN',
    LOG_OUT = 'LOG_OUT',
    CHECK_LOGIN = 'CHECK_LOGIN',
    GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS',
}

export interface IAuthState {
    isAuth: boolean,
    userId: null | number,
    email: null | string,
    login: null | string,
    captchaUrl: undefined | string,
    error: boolean,
}
