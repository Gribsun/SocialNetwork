import {instance} from './common/instance';
import {FollowResponseType, UsersResponseType} from './apiTypes';

export const usersAPI = {
    users(pageSize: number, page: number, term: string, friend: null | boolean) {
        return instance
            .get<UsersResponseType>(`users?count=${pageSize}&page=${page}&term=${term}&friend=${friend}`)
            .then(response => response.data);
    },
    follow(userId: number) {
        return instance
            .post<FollowResponseType>(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId: number) {
        return instance
            .delete<FollowResponseType>(`follow/${userId}`)
            .then(response => response.data);
    },
}
