import {UserType} from '../../../init/types/usersTypes';

export type FilterType = {
    term: string,
    friend: boolean | null,
}

type UsersDataType = {
    isAuth: boolean,
    users: UserType[],
    pageSize: number,
    currentPage: number,
    totalCount: number,
    filter: FilterType,
    isFetching: boolean,
    followingInProgress: boolean,
}

type UsersFunctionType = {
    setFilter: (term: string, friend: null | boolean) => void,
    getUsers: (pageSize: number, page: number, term: string, friend: null | boolean) => void,
    followUser: (id: number) => void,
    unfollowUser: (id: number) => void,
    setIsFetching: (isFetching: boolean) => void,
    setIsFollowingProgress: (followingInProgress: boolean) => void,
}

export type UsersPropsType = UsersDataType & UsersFunctionType;
