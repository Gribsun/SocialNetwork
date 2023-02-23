import {ProfileTypes} from '../types/profileTypes';
import {profileAPI} from '../../api/api';

export const getUserProfile = ({id}) => async (dispatch) => {
    try {
        if (id) {
            const response = await profileAPI.profile(id);
            if (response.data) {
                dispatch({
                    type: ProfileTypes.SET_USER_PROFILE,
                    payload: response.data,
                })
            }
        }
    } catch (err) {
        console.log(err);
    }
};

export const getUserStatus = ({id}) => async (dispatch) => {
    try {
        if (id) {
            const response = await profileAPI.status(id);
            if (response.data) {
                dispatch({
                    type: ProfileTypes.GET_USER_STATUS,
                    payload: response.data,
                })
            } else {
                dispatch({
                    type: ProfileTypes.GET_USER_STATUS,
                    payload: '',
                })
            }
        }
    } catch (err) {
        console.log(err);
    }
};

export const updateUserStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);
        if (response) {
            dispatch({
                type: ProfileTypes.UPDATE_USER_STATUS,
                payload: status,
            })
        }
    } catch (err) {
        console.log(err);
    }
};
