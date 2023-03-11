import {RootState} from '../index';

export const getIsAuthSelect = (state: RootState): boolean => {
    const localIsAuth = localStorage.getItem('isAuth');
    return !!localIsAuth || state.auth.isAuth;
}

export const getCaptchaSelect = (state: RootState): string | undefined => {
    return state.auth.captchaUrl;
}

export const getErrorSelect = (state: RootState): boolean => {
    return state.auth.error;
}
