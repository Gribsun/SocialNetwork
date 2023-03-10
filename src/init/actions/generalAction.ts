import {ActionGeneralTypes} from '../types/generalTypes';
import {AppDispatch} from '../index';

export const setIsFetching = (
    isFetching: boolean
) => (dispatch: AppDispatch) => {
    dispatch({
        type: ActionGeneralTypes.TOGGLE_IS_FETCHING,
        payload: isFetching,
    });
};

export const setIsFollowingProgress = (
    followingInProgress: boolean
) => (dispatch: AppDispatch) => {
    dispatch({
        type: ActionGeneralTypes.TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: followingInProgress,
    });
};
