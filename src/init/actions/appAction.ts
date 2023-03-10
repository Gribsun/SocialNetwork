import {AppDispatch} from '../index';
import {AppActionTypes} from '../types/appTypes';

export const initializedSuccess = () => async (dispatch: AppDispatch) => {
    dispatch({
        type: AppActionTypes.INITIALIZED_SUCCESS,
        payload: {
            initialized: true,
        },
    })
}
