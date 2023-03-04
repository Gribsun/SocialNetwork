import {AppActionTypes, IAppState} from '../types/appTypes';
import {AnyAction} from 'redux';

const initialState: IAppState = {
    initialized: false,
}

export const initializedReducer = (
    state = initialState,
    action: AnyAction
): IAppState => {
    switch (action.type) {
        case AppActionTypes.INITIALIZED_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}
