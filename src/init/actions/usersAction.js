import axios from "axios";
import {UsersTypes} from "../types/usersTypes";

export const setUsers = (pageSize, page) => async (dispatch) => {
    try {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${page}`);
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

export const followUser = (userId) => async (dispatch) => {
    try {
        dispatch({
            type: UsersTypes.FOLLOW,
            payload: userId,
        });
    } catch (err) {
        console.log(err);
    }
};

export const unfollowUser = (userId) => async (dispatch) => {
    try {
        dispatch({
            type: UsersTypes.UNFOLLOW,
            payload: userId,
        });
    } catch (err) {
        console.log(err);
    }
};

export const setIsFetching = (isFetching) => async (dispatch) => {
    try {
        dispatch({
            type: UsersTypes.TOGGLE_IS_FETCHING,
            payload: isFetching,
        });
    } catch (err) {
        console.log(err);
    }
};
