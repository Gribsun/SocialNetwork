import axios from "axios";
import {PostsTypes} from "../types/postsTypes";

export const getPosts = () => async (dispatch) => {
    try {
        dispatch({
            type: PostsTypes.GET_POSTS,
            payload: null,
        });
    } catch (err) {
        console.log(err);
    }
};


export const addPost = (text) => async (dispatch) => {
    try {
        const response = {
                id: 8127462375468256 + Math.random()*100,
                text,
                title: 'New!!!',
                likesCount: 777,
            };
        dispatch({
            type: PostsTypes.ADD_POST,
            payload: response,
        });
    } catch (err) {
        console.log(err);
    }
};
