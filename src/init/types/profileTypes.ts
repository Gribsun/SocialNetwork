export enum ActionProfileTypes {
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    GET_USER_STATUS = 'GET_USER_STATUS',
    UPDATE_USER_INFO = 'UPDATE_USER_INFO',
    UPDATE_USER_STATUS = 'UPDATE_USER_STATUS',
    UPDATE_USER_PHOTO = 'UPDATE_USER_PHOTO',
    CHECK_IS_MY_PROFILE = 'CHECK_IS_MY_PROFILE',
}

export type UserPhotosType = {
    small: string,
    large: string,
}

export interface IProfileContacts {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

export interface IProfileUser {
    userId: number | null,
    status: string,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    photos: UserPhotosType,
    contacts: IProfileContacts,
}

export interface IProfileState {
    profileData: IProfileUser,
    isMyProfile: boolean,
    isFetching: boolean,
}

export interface IProfileData {
    userId: number | null,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: IProfileContacts,
}
