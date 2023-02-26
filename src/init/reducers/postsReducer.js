import {PostsTypes} from "../types/postsTypes";
import {initialState} from "../../data/posts";
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PostsTypes.ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
            }
        default:
            return state;
    }
}
