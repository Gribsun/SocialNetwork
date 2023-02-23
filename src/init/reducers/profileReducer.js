import {ProfileTypes} from '../types/profileTypes';
import {GeneralTypes} from "../types/generalTypes";

const initialState = {
    profileData: null,
    isFetching: false,
    status: '',
}

export const profileReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ProfileTypes.SET_USER_PROFILE: {
            return {
                ...state,
                ...action.payload,
                isFetching: false,
            }
        }
        case ProfileTypes.GET_USER_STATUS: {
            return {
                ...state,
                status: action.payload,
            }
        }
        case ProfileTypes.UPDATE_USER_STATUS: {
            return {
                ...state,
                status: action.payload,
            }
        }
        case GeneralTypes.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        default:
            return state;
    }
}
