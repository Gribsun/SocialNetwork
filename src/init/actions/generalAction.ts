import {ActionGeneralTypes} from '../types/generalTypes';
import {AppDispatch} from '../index';

export const setIsFetching = () => async (dispatch: AppDispatch) => {
    dispatch({
        type: ActionGeneralTypes.TOGGLE_IS_FETCHING,
        payload: true,
    });
};
