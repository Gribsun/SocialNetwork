import {instance} from './common/instance';
import {CaptchaResponseType} from './apiTypes';

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<CaptchaResponseType>(`security/get-captcha-url`)
            .then(response => response.data);
    },
};
