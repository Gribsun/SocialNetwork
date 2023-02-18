import axios from "axios";
import {MessagesTypes} from "../types/messagesTypes";

export const getMessages = () => async (dispatch) => {
    try {
        dispatch({
            type: MessagesTypes.GET_MESSAGES,
            payload: null,
        });
    } catch (err) {
        console.log(err);
    }
};

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
