import {ProfileTypes} from '../types/profileTypes';

const initialState = {
    profileData: null,
    isFetching: false,
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
        case ProfileTypes.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        default:
            return state;
    }
}
