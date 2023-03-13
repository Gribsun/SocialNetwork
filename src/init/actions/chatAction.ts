import {AppDispatch} from '../index';
import {chatApi} from '../../api';
import {ChatActionTypes, ChatMessageType} from '../types/chatTypes';

let _newMessageHandlerCreator: ((messages: ChatMessageType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: AppDispatch) => {
    if (_newMessageHandlerCreator === null) {
        _newMessageHandlerCreator = (messages) => {
            dispatch({
                type: ChatActionTypes.SET_MESSAGES,
                payload: {messages},
            })
        }
    }
    return _newMessageHandlerCreator
}

export const startMessagesListening = () => async (dispatch: AppDispatch) => {
    try {
        chatApi.start();
        chatApi.subscribe(newMessageHandlerCreator(dispatch));
    } catch (err) {
        console.log(err);
    }
};

export const stopMessagesListening = () => async (dispatch: AppDispatch) => {
    try {
        chatApi.unsubscribe(newMessageHandlerCreator(dispatch));
        chatApi.stop();
    } catch (err) {
        console.log(err);
    }
};

export const sendMessage = (message: string) => async (dispatch: AppDispatch) => {
    try {
        chatApi.sendMessage(message);
    } catch (err) {
        console.log(err);
    }
}
