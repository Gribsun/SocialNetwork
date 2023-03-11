import {postsReducer} from '../postsReducer';
import {initialState} from '../../../data/posts';
import {ActionPostsTypes} from '../../types/postsTypes';

const state = initialState;

const newPost = {
    id: 8127462375468256 + Math.random() * 100,
    text: 'Tronce time',
    title: 'Title ',
    likesCount: 777,
};

const newState = postsReducer(state, {
    type: ActionPostsTypes.ADD_POST,
    payload: newPost,
});

describe('Check postsReducer', () => {
    it('has a default states', () => {
        expect(postsReducer(undefined, {type: 'unexpected'})).toEqual(state);
    });

    it('new post should be added', () => {
        expect(newState.posts.length).toBe(6);
    });

    it('text of new post should be correct', () => {
        expect(newState.posts[0].text).toBe('Tronce time');
    });
});

