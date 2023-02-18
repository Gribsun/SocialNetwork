import {UsersTypes} from "../types/usersTypes";

const initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
}

export const usersReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case UsersTypes.SET_USERS:
            return {
                ...state,
                users: [...action.payload.items],
                currentPage: action.payload.currentPage,
                totalCount: action.payload.totalCount,
                isFetching: false,
            }
        case UsersTypes.FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            followed: true
                        };
                    } else return user;
                })
            };
        case UsersTypes.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            followed: false,
                        };
                    } else return user;
                })
            };
        case UsersTypes.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        default:
            return state;
    }
}
