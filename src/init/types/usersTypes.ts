export enum ActionUsersTypes {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    GET_USERS = 'GET_USERS',
    SET_FILTER = 'SET_FILTER',
}

export type UserPhotoType = {
    small: null | string,
    large: null | string,
}

export type UserType = {
    followed: boolean,
    id: number,
    name: string,
    photos: UserPhotoType,
    status: null | string,
    uniqueUrlName: null | string,
}

export interface IUsersState {
    users: UserType[],
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: boolean,
    filter: {
        term: string,
    },
}
