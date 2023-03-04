import {RootState} from '../index';

export const getIsAuthSelect = (state: RootState) => {
    return state.auth.isAuth;
}

export const getCaptchaSelect = (state: RootState) => {
    return state.auth.captchaUrl;
}

export const getErrorSelect = (state: RootState) => {
    return state.auth.error;
}
