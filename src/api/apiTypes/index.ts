import {IProfileUser} from '../../init/types/profileTypes';

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptchaEnum {
    Captcha = 10,
}

export type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string,
    },
    resultCode: ResultCodeEnum,
    messages: string | [],
}
export type LoginResponseType = {
    data: {
        userId: number,
    },
    resultCode: ResultCodeEnum | ResultCodeForCaptchaEnum,
    messages: string | [],
}
export type LogoutResponseType = {
    data: {},
    resultCode: ResultCodeEnum,
    messages: string | [],
}

export type CaptchaResponseType = {
    url: string,
}

export type UsersResponseType = {
    items: {
        id: number,
        name: string,
        status: string | null,
        photos: {
            small: string | null,
            large: string | null,
        }
        followed: boolean,
    },
    totalCount?: number,
    error?: string,
}
export type FollowResponseType = {
    data: {},
    resultCode: ResultCodeEnum,
    messages: string | [],
}
export type ProfileResponseType = {
    data: {},
    resultCode: ResultCodeEnum,
    messages: string | [],
}

export type ProfileIdResponseType = IProfileUser;
export type ProfileStatusResponseType = ProfileResponseType;
export type ProfileStatusIdResponseType = {
    data: string,
}
export type ProfilePhotoResponseType = {
    data: {
        photos: {
            small: string,
            large: string,
        }
    },
    resultCode: ResultCodeEnum,
    messages: string | [],
}
