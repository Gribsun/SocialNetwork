import {ActionPostsTypes} from '../types/postsTypes';
import {AppDispatch} from '../index';

export const addPost = (text: string) => (dispatch: AppDispatch) => {
    const response = {
        id: 8127462375468256 + Math.random() * 100,
        text,
        title: 'Title ',
        likesCount: 777,
    };
    dispatch({
        type: ActionPostsTypes.ADD_POST,
        payload: response,
    });
};
