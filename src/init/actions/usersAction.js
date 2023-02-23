import {UsersTypes} from "../types/usersTypes";
import {usersAPI} from '../../api/api';

export const getUsers = (pageSize = 5, page = 1, term = '') => async (dispatch) => {
    try {
        const response = await usersAPI.users(pageSize, page, term);
        if (response.data) {
            const {items, totalCount} = response.data;
            dispatch({
                type: UsersTypes.SET_USERS,
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

export const setFilter = (term) => async (dispatch) => {
    try {
        dispatch({
            type: UsersTypes.SET_FILTER,
            payload: term,
        });
    } catch (err) {
        console.log(err);
    }
};


export const followUser = (userId) => async (dispatch) => {
    try {
        const response = await usersAPI.follow(userId);
        if (response.data.resultCode === 0) {
            dispatch({
                type: UsersTypes.FOLLOW,
                payload: userId,
            });
        }
    } catch (err) {
        console.log(err);
    }
};

export const unfollowUser = (userId) => async (dispatch) => {
    try {
        const response = await usersAPI.unfollow(userId);
        if (response.data.resultCode === 0) {
            dispatch({
                type: UsersTypes.UNFOLLOW,
                payload: userId,
            });
        }
    } catch (err) {
        console.log(err);
    }
};
