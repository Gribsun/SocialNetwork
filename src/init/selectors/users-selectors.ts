import {RootState} from '../index';

export const getUserSelect = (state: RootState) => {
    return state.userCollection.users;
}

export const getPageSizeSelect = (state: RootState) => {
    return state.userCollection.pageSize;
}
export const getCurrentPageSelect = (state: RootState) => {
    return state.userCollection.currentPage;
}

export const getFilterUsersSelect = (state: RootState) => {
    return state.userCollection.filter;
}

export const getTotalCountSelect = (state: RootState) => {
    return state.userCollection.totalCount;
}

export const getIsFetchingSelect = (state: RootState) => {
    return state.userCollection.isFetching;
}

export const getFollowingInProgressSelect = (state: RootState) => {
    return state.userCollection.followingInProgress;
}
