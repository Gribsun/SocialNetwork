import {instance} from './common/instance';
import {LoginResponseType, LogoutResponseType, MeResponseType} from './apiTypes';

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
            .then(response => response.data);
    },
    logIn(email: string, password: string, rememberMe: boolean, captcha: undefined | string) {
        return instance.post<LoginResponseType>(`auth/login`, {
            email, password, rememberMe, captcha
        })
            .then(response => response.data)
    },
    logOut() {
        return instance.delete<LogoutResponseType>(`auth/login`);
    },
};
