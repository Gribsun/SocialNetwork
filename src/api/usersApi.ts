import {instance} from './common/instance';
import {FollowResponseType, UsersResponseType} from './apiTypes';

export const usersAPI = {
    users(pageSize: number, page: number, term: string) {
        return instance
            .get<UsersResponseType>(`users?count=${pageSize}&page=${page}&term=${term}`)
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
