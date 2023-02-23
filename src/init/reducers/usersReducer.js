import {UsersTypes} from "../types/usersTypes";
import {GeneralTypes} from "../types/generalTypes";

const initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
    filter: {
        term: '',
    },
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
        case UsersTypes.SET_FILTER:
            return {
                ...state,
                filter: {term: action.payload},
            }
        case UsersTypes.FOLLOW:
            return {
                ...state,
                followingInProgress: false,
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
                followingInProgress: false,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            followed: false,
                        };
                    } else return user;
                })
            };
        case GeneralTypes.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        case GeneralTypes.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload,
            }
        default:
            return state;
    }
}
