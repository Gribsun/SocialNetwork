// core
import React from 'react';
import {connect} from 'react-redux';

// actions
import {getUsers, followUser, unfollowUser, setFilter} from '../../init/actions/usersAction';
import {setIsFetching, setIsFollowingProgress} from '../../init/actions/generalAction';

// other
import {
    getCurrentPageSelect,
    getFilterUsersSelect, getFollowingInProgressSelect, getIsFetchingSelect,
    getPageSizeSelect, getTotalCountSelect,
    getUserSelect
} from '../../init/selectors/users-selectors';

// components
import Users from './Users';

// types
import {RootState} from '../../init';
import {UserType} from '../../init/types/usersTypes';
import {FilterType} from './types/UsersPageTypes';

type MapStateToPropsType = {
    isAuth: boolean,
    users: UserType[],
    filter: FilterType,
    pageSize: number,
    currentPage: number,
    totalCount: number,
    isFetching: boolean,
    followingInProgress: boolean,
}

type MapDispatchToPropsType = {
    setFilter: (term: string, friend: null | boolean) => void,
    getUsers: (pageSize: number, page: number, term: string, friend: null | boolean) => void,
    followUser: (id: number) => void,
    unfollowUser: (id: number) => void,
    setIsFetching: (isFetching: boolean) => void,
    setIsFollowingProgress: (followingInProgress: boolean) => void,
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        users: getUserSelect(state),
        filter: getFilterUsersSelect(state),
        pageSize: getPageSizeSelect(state),
        currentPage: getCurrentPageSelect(state),
        totalCount: getTotalCountSelect(state),
        isFetching: getIsFetchingSelect(state),
        followingInProgress: getFollowingInProgressSelect(state),
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootState>(
    mapStateToProps, {
        getUsers,
        setFilter,
        followUser,
        unfollowUser,
        setIsFetching,
        setIsFollowingProgress,
    }
)(Users);
