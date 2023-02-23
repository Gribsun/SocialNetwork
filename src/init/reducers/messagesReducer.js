import {MessagesTypes} from "../types/messagesTypes";
import {initialState} from "../../data/messages";
export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MessagesTypes.ADD_MESSAGE:
            return [...state, action.payload];
        default:
            return state;
    }
}
