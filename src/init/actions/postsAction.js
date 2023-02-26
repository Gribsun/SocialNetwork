import {PostsTypes} from '../types/postsTypes';

export const addPost = (text) => (dispatch) => {
    const response = {
        id: 8127462375468256 + Math.random() * 100,
        text,
        title: 'Title ',
        likesCount: 777,
    };
    dispatch({
        type: PostsTypes.ADD_POST,
        payload: response,
    });
};
