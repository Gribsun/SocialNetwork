// core
import React from 'react';
import {connect} from 'react-redux';
import {addPost} from '../../../init/actions/postsAction';

// components
import Posts from './Posts';

// other
import {getPosts} from "../../../init/selectors/posts-selectors";
import {getIsAuthSelect} from "../../../init/selectors/auth-selectors";

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuthSelect(state),
        posts: getPosts(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPost(text));
        },
    }
}

export const PostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
