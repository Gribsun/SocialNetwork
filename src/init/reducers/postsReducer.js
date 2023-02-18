import {PostsTypes} from "../types/postsTypes";
import {initialState} from "../../data/posts";
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PostsTypes.GET_POSTS:
            return state;
        case PostsTypes.ADD_POST:
            return [action.payload, ...state];
        default:
            return state;
    }
}
