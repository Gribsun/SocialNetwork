import {RootState} from '../index';
import {IProfileState} from '../types/profileTypes';

export const getProfileSelect = (state: RootState): IProfileState => {
    return state.profile;
}
