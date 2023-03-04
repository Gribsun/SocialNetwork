import {ActionMessagesTypes} from '../types/messagesTypes';
import {AppDispatch} from '../index';

export const addMessage = (text: string) => async (dispatch: AppDispatch) => {
    try {
        const response = {
            id: 8127462375468256 + Math.random()*100,
            message: text,
        };
        dispatch({
            type: ActionMessagesTypes.ADD_MESSAGE,
            payload: response,
        });
    } catch (err) {
        console.log(err);
    }
};
