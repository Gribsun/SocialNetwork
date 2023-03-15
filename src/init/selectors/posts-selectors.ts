import {RootState} from '../index';

export const getPostsSelect = (state: RootState) => {
    return state.postsCollection.posts;
}
