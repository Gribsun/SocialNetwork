import {AuthTypes} from '../types/authTypes';
import {authAPI} from '../../api/api';

export const setUserData = () => async (dispatch) => {
    try {
        const response = await authAPI.me();
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data;
            const userId = id;
            dispatch({
                type: AuthTypes.SET_USER_DATA,
                payload: {
                    userId, email, login
                },
            })
        }
    } catch (err) {
        console.log(err);
    }
};

export const checkLogin = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const {id, login} = response.data.data;
        dispatch({
            type: AuthTypes.CHECK_LOGIN,
            payload: {
                userId: id,
                login,
            },
        })
    }
};

export const logIn = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.logIn(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        const {userId} = response.data;
        dispatch({
            type: AuthTypes.LOG_IN,
            payload: {
                userId
            },
        })
    }
};

export const logOut = () => async (dispatch) => {
    await authAPI.logOut();
    dispatch({
        type: AuthTypes.LOG_OUT,
        payload: {},
    })
};
