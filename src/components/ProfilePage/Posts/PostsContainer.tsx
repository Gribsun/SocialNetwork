// core
import React from 'react';
import {connect} from 'react-redux';
import {addPost} from '../../../init/actions/postsAction';

// components
import Posts from './Posts';

// other
import {AppDispatch, RootState} from '../../../init';
import {getPosts} from '../../../init/selectors/posts-selectors';

const mapStateToProps = (state: RootState) => {
    return {
        posts: getPosts(state),
        isMyProfile: state.profile.isMyProfile,
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addPost: (text: string) => {
            dispatch(addPost(text));
        },
    }
}

export const PostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
