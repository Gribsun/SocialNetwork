import {AnyAction} from 'redux';
import {ChatActionTypes, ChatMessageAPIType, ChatMessageType, StatusType} from '../types/chatTypes';
import {v1} from 'uuid';

const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType,
}

export const chatReducer = (
    state = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case ChatActionTypes.SET_MESSAGES: {
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages
                    .map((m: ChatMessageAPIType): ChatMessageType => ({...m, id: v1()}))],
            }
        }
        case ChatActionTypes.SET_STATUS: {
            return {
                ...state,
                status: action.payload.status,
            }
        }
        default:
            return state;
    }
}
