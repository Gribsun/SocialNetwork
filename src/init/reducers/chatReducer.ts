import {AnyAction} from 'redux';
import {ChatActionTypes, ChatMessageType} from '../types/chatTypes';

const initialState = {
    messages: [] as ChatMessageType[],
}

export const chatReducer = (
    state = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case ChatActionTypes.SET_MESSAGES: {
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages],
            }
        }
        default:
            return state;
    }
}
