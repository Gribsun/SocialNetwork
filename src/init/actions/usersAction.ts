import {ActionUsersTypes} from '../types/usersTypes';
import {usersAPI} from '../../api/api';
import {AppDispatch} from '../index';

export const getUsers = (
    pageSize = 5,
    page = 1,
    term = ''
) => async (dispatch: AppDispatch) => {
    try {
        const response = await usersAPI.users(pageSize, page, term);
        if (response.data) {
            const {items, totalCount} = response.data;
            dispatch({
                type: ActionUsersTypes.SET_USERS,
                payload: {
                    items,
                    currentPage: page,
                    totalCount,
                },
            });
        }
    } catch (err) {
        console.log(err);
    }
};

export const setFilter = (term: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({
            type: ActionUsersTypes.SET_FILTER,
            payload: term,
        });
    } catch (err) {
        console.log(err);
    }
};


export const followUser = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await usersAPI.follow(userId);
        if (response.data.resultCode === 0) {
            dispatch({
                type: ActionUsersTypes.FOLLOW,
                payload: userId,
            });
        }
    } catch (err) {
        console.log(err);
    }
};

export const unfollowUser = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await usersAPI.unfollow(userId);
        if (response.data.resultCode === 0) {
            dispatch({
                type: ActionUsersTypes.UNFOLLOW,
                payload: userId,
            });
        }
    } catch (err) {
        console.log(err);
    }
};
