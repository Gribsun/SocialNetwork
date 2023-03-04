import {IMessagesState, ActionMessagesTypes} from '../types/messagesTypes';
import {initialState} from '../../data/messages';
import {AnyAction} from 'redux';

export const messagesReducer = (
    state: IMessagesState = initialState,
    action: AnyAction,
): IMessagesState => {
    switch (action.type) {
        case ActionMessagesTypes.ADD_MESSAGE:
            return [...state, action.payload];
        default:
            return state;
    }
}
