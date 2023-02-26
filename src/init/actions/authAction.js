import {AuthTypes} from '../types/authTypes';
import {authAPI} from '../../api/api';

export const setUserData = () => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data;
                dispatch({
                    type: AuthTypes.SET_USER_DATA,
                    payload: {
                        userId: id, email, login, isAuth: true, error: false,
                    },
                })
            }
        });
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
                isAuth: true,
                error: false,
            },
        })
    } else {
        dispatch({
            type: AuthTypes.LOG_IN,
            payload: {
                isAuth: false,
                error: true,
            },
        })
    }
};

export const logIn = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.logIn(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch({
            type: AuthTypes.LOG_IN,
            payload: {
                isAuth: true,
                error: false,
            },
        })
    } else {
        dispatch({
            type: AuthTypes.LOG_IN,
            payload: {
                isAuth: false,
                error: true,
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

export const initializedSuccess = () => async (dispatch) => {
    dispatch({
        type: AuthTypes.INITIALIZED_SUCCESS,
        payload: {
            initialized: true,
        },
    })
}
