import {GeneralTypes} from "../types/generalTypes";

export const setIsFetching = (isFetching) => (dispatch) => {
    dispatch({
        type: GeneralTypes.TOGGLE_IS_FETCHING,
        payload: isFetching,
    });
};

export const setIsFollowingProgress = (followingInProgress) => (dispatch) => {
    dispatch({
        type: GeneralTypes.TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: followingInProgress,
    });
};
