export const getIsAuthSelect = (state) => {
    return state.auth.isAuth;
}

export const getCaptchaSelect = (state) => {
    return state.auth.captchaUrl;
}

export const getErrorSelect = (state) => {
    return state.auth.error;
}

export const getInitializedSelect = (state) => {
    return state.auth.initialized;
}
