import {RootState} from '../index';

export const getCaptchaSelect = (state: RootState): string | undefined => {
    return state.auth.captchaUrl;
}

export const getErrorSelect = (state: RootState): boolean => {
    return state.auth.error;
}
