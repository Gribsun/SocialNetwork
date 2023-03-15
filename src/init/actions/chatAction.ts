import {AppDispatch} from '../index';
import {chatApi} from '../../api';
import {ChatActionTypes, ChatMessageAPIType, StatusType} from '../types/chatTypes';

let _newMessageHandlerCreator: ((messages: ChatMessageAPIType[]) => void) | null = null;
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

let _statusChangedHandler: ((status: StatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: AppDispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch({
                type: ChatActionTypes.SET_STATUS,
                payload: {status},
            })
        }
    }
    return _statusChangedHandler
}

export const startMessagesListening = () => async (dispatch: AppDispatch) => {
    try {
        chatApi.start();
        chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch));
        chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
    } catch (err) {
        console.log(err);
    }
};

export const stopMessagesListening = () => async (dispatch: AppDispatch) => {
    try {
        chatApi.unsubscribe('messages-received', newMessageHandlerCreator(dispatch));
        chatApi.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
        chatApi.stop();
    } catch (err) {
        console.log(err);
    }
};

export const sendMessage = (message: string) => async () => {
    try {
        chatApi.sendMessage(message);
    } catch (err) {
        console.log(err);
    }
}
