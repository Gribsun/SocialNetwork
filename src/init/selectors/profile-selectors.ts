import {RootState} from '../index';
import {IProfileUser} from '../types/profileTypes';

export const getProfileDataSelect = (state: RootState): IProfileUser => {
    return state.profile.profileData;
}

export const getIsMyProfileSelect = (state: RootState): boolean => {
    return state.profile.isMyProfile;
}

export const getIsFetchingSelect = (state: RootState): boolean => {
    return state.profile.isFetching;
}
