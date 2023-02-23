import {MessagesTypes} from "../types/messagesTypes";

export const addMessage = (text) => async (dispatch) => {
    try {
        const response = {
            id: 8127462375468256 + Math.random()*100,
            message: text,
        };
        dispatch({
            type: MessagesTypes.ADD_MESSAGE,
            payload: response,
        });
    } catch (err) {
        console.log(err);
    }
};
