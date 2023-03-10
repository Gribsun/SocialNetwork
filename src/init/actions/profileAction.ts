import {ActionProfileTypes, IProfileUser} from '../types/profileTypes';
import {profileAPI} from '../../api';
import {AppDispatch} from '../index';

export const getUserProfile = (id: number | null) => async (dispatch: AppDispatch) => {
    try {
        if (id) {
            const data = await profileAPI.profile(id);
            if (data) {
                dispatch({
                    type: ActionProfileTypes.SET_USER_PROFILE,
                    payload: data,
                })
            }
        }
    } catch (err) {
        console.log(err);
    }
};

export const updateUserProfile = (profileData: Omit<IProfileUser, 'photos'>) =>
    async (dispatch: AppDispatch) => {
        try {
            const data = await profileAPI.updateProfile(profileData);
            if (data.resultCode === 0) {
                dispatch({
                    type: ActionProfileTypes.UPDATE_USER_INFO,
                    payload: {
                        profileData
                    },
                })
            }
        } catch (err) {
            console.log(err);
        }
    };

export const getUserStatus = (id: number | null) =>
    async (dispatch: AppDispatch) => {
        try {
            if (id) {
                const data = await profileAPI.status(id);
                if (data) {
                    dispatch({
                        type: ActionProfileTypes.GET_USER_STATUS,
                        payload: data,
                    })
                } else {
                    dispatch({
                        type: ActionProfileTypes.GET_USER_STATUS,
                        payload: '',
                    })
                }
            }
        } catch (err) {
            console.log(err);
        }
    };

export const updateUserStatus = (status: string) =>
    async (dispatch: AppDispatch) => {
        try {
            const data = await profileAPI.updateStatus(status);
            if (data) {
                dispatch({
                    type: ActionProfileTypes.UPDATE_USER_STATUS,
                    payload: status,
                })
            }
        } catch (err) {
            console.log(err);
        }
    };

export const updatePhoto = (file: string) => async (dispatch: AppDispatch) => {
    try {
        const data = await profileAPI.savePhoto(file);
        if (data.resultCode === 0) {
            const {photos} = data.data;
            dispatch({
                type: ActionProfileTypes.UPDATE_USER_PHOTO,
                payload: photos,
            })
        }
    } catch (err) {
        console.log(err);
    }
};

export const checkIsMyProfile = (isMyProfile: boolean) => async (dispatch: AppDispatch) => {
    dispatch({
        type: ActionProfileTypes.CHECK_IS_MY_PROFILE,
        payload: {
            isMyProfile,
        },
    })
}
