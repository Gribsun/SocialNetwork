// core
import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

// actions
import {getUsers, followUser, unfollowUser, setFilter} from '../../init/actions/usersAction';
import {setIsFetching, setIsFollowingProgress} from '../../init/actions/generalAction';

// other
import {getIsAuthSelect} from '../../init/selectors/auth-selectors';
import {
    getCurrentPageSelect,
    getFilterUsersSelect, getFollowingInProgressSelect, getIsFetchingSelect,
    getPageSizeSelect, getTotalCountSelect,
    getUserSelect
} from '../../init/selectors/users-selectors';

// components
import Users from './Users';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuthSelect(state),
        users: getUserSelect(state),
        filter: getFilterUsersSelect(state),
        pageSize: getPageSizeSelect(state),
        currentPage: getCurrentPageSelect(state),
        totalCount: getTotalCountSelect(state),
        isFetching: getIsFetchingSelect(state),
        followingInProgress: getFollowingInProgressSelect(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        getUsers,
        setFilter,
        followUser,
        unfollowUser,
        setIsFetching,
        setIsFollowingProgress
    }),
    WithAuthRedirect,
)(Users);
