import {ActionUsersTypes} from '../types/usersTypes';
import {usersAPI} from '../../api';
import {AppDispatch} from '../index';
import {ResultCodeEnum} from '../../api/apiTypes';
import {ActionGeneralTypes} from "../types/generalTypes";

export const getUsers = (
    pageSize = 5,
    page = 1,
    term: string,
    friend: null | boolean,
) => async (dispatch: AppDispatch) => {
    try {
        const data = await usersAPI.users(pageSize, page, term, friend);

        if (data) {
            const {items, totalCount} = data;
            dispatch({
                type: ActionUsersTypes.GET_USERS,
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

export const followUser = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        const data = await usersAPI.follow(userId);
        if (data.resultCode === ResultCodeEnum.Success) {
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
        const data = await usersAPI.unfollow(userId);
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch({
                type: ActionUsersTypes.UNFOLLOW,
                payload: userId,
            });
        }
    } catch (err) {
        console.log(err);
    }
};


export const setIsFollowingProgress = (
    followingInProgress: boolean
) => (dispatch: AppDispatch) => {
    dispatch({
        type: ActionGeneralTypes.TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: followingInProgress,
    });
};


export const setFilter = (term: string, friend: null | boolean) => async (dispatch: AppDispatch) => {
    dispatch({
        type: ActionUsersTypes.SET_FILTER,
        payload: {
            term,
            friend,
        },
    });
};
