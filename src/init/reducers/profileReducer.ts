import {ActionProfileTypes, IProfileState} from '../types/profileTypes';
import {ActionGeneralTypes} from '../types/generalTypes';
import {AnyAction} from 'redux';

const initialState: IProfileState = {
    profileData: {
        userId: 0,
        aboutMe: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        photos: {
            small: '',
            large: '',
        },
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
    },
    isMyProfile: true,
    isFetching: false,
    status: '',
}

export const profileReducer = (
    state = initialState,
    action: AnyAction,
): IProfileState => {
    switch (action.type) {
        case ActionProfileTypes.SET_USER_PROFILE: {
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    ...action.payload,
                },
                isFetching: false,
            }
        }
        case ActionProfileTypes.GET_USER_STATUS: {
            return {
                ...state,
                status: action.payload,
            }
        }
        case ActionProfileTypes.UPDATE_USER_INFO: {
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    ...action.payload
                }
            }
        }
        case ActionProfileTypes.UPDATE_USER_STATUS: {
            return {
                ...state,
                status: action.payload,
            }
        }
        case ActionProfileTypes.UPDATE_USER_PHOTO: {
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    photos: {...action.payload},
                },
            }
        }
        case ActionProfileTypes.CHECK_IS_MY_PROFILE: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case ActionGeneralTypes.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        default:
            return state;
    }
}
