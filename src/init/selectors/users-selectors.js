export const getUserSelect = (state) => {
    return state.userCollection.users;
}

export const getPageSizeSelect = (state) => {
    return state.userCollection.pageSize;
}
export const getCurrentPageSelect = (state) => {
    return state.userCollection.currentPage;
}

export const getFilterUsersSelect = (state) => {
    return state.userCollection.filter;
}

export const getTotalCountSelect = (state) => {
    return state.userCollection.totalCount;
}

export const getIsFetchingSelect = (state) => {
    return state.userCollection.isFetching;
}

export const getFollowingInProgressSelect = (state) => {
    return state.userCollection.followingInProgress;
}
