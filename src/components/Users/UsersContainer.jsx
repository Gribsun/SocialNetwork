// core
import React from 'react';
import {connect} from 'react-redux';
import {
    setUsers,
    followUser,
    unfollowUser,
    setIsFetching
} from '../../init/actions/usersAction';

// components
import {Users} from './Users';

const mapStateToProps = (state) => {
    const totalCount = state.userCollection.totalCount;
    const pages = [];
    const pagesSideBySide = state.userCollection.currentPage + 2;
    for (let i = pagesSideBySide - 5; i <= pagesSideBySide; i++) {
        if (i > 0 && i < totalCount) {
            pages.push(i);
        }
    }
    pages.push(totalCount);
    return {
        users: state.userCollection.users,
        pageSize: state.userCollection.pageSize,
        currentPage: state.userCollection.currentPage,
        pagesCount: pages,
        isFetching: state.userCollection.isFetching,
    }
}

export const UsersContainer = connect(
    mapStateToProps,
    {
        setUsers,
        followUser,
        unfollowUser,
        setIsFetching,
    }
)(Users);
