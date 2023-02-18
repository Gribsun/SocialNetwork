// core
import React from 'react';
import {connect} from "react-redux";
import {addPost} from "../../../init/actions/postsAction";

// components
import {Posts} from "./Posts";

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostHandle: (text) => {
            dispatch(addPost(text));
        },
    }
}

export const PostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
