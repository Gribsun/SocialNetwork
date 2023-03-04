import {ActionProfileTypes, IProfileState, UserPhotosType} from '../types/profileTypes';
import {profileAPI} from '../../api/api';
import {AppDispatch} from '../index';

export const getUserProfile = ({id}: { id: number }) => async (dispatch: AppDispatch) => {
    try {
        if (id) {
            const response = await profileAPI.profile(id);
            if (response.data) {
                dispatch({
                    type: ActionProfileTypes.SET_USER_PROFILE,
                    payload: response.data,
                })
            }
        }
    } catch (err) {
        console.log(err);
    }
};

export const updateUserProfile = (profile: IProfileState) => async (dispatch: AppDispatch) => {
    try {
        const response = await profileAPI.updateProfile(profile.profileData);
        if (response.data.resultCode === 0) {
            dispatch({
                type: ActionProfileTypes.UPDATE_USER_INFO,
                payload: profile.profileData,
            })
        }
    } catch (err) {
        console.log(err);
    }
};

export const getUserStatus = ({id}: { id: number }) => async (dispatch: AppDispatch) => {
    try {
        if (id) {
            const response = await profileAPI.status(id);
            if (response.data) {
                dispatch({
                    type: ActionProfileTypes.GET_USER_STATUS,
                    payload: response.data,
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

export const updateUserStatus = (status: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);
        if (response) {
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
        const response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            const {photos}: {photos: UserPhotosType} = response.data.data.photos;
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
