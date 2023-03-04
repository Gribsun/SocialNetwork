import {ActionPostsTypes, IPostsState} from '../types/postsTypes';
import {initialState} from '../../data/posts';
import {AnyAction} from 'redux';
export const postsReducer = (
    state: IPostsState = initialState,
    action: AnyAction
): IPostsState => {
    switch (action.type) {
        case ActionPostsTypes.ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
            }
        default:
            return state;
    }
}
