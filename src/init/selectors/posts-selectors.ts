import {RootState} from '../index';

export const getPosts = (state: RootState) => {
    return state.postsCollection.posts;
}
