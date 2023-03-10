import {IUsersState, ActionUsersTypes} from '../types/usersTypes';
import {ActionGeneralTypes} from '../types/generalTypes';
import {AnyAction} from 'redux';

const initialState: IUsersState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
    filter: {
        term: '',
        friend: null,
    },
}

export const usersReducer = (
    state = initialState,
    action: AnyAction
): IUsersState => {
    switch (action.type) {
        case ActionUsersTypes.GET_USERS:
            return {
                ...state,
                users: [...action.payload.items],
                currentPage: action.payload.currentPage,
                totalCount: action.payload.totalCount,
                isFetching: false,
            }
        case ActionUsersTypes.SET_FILTER:
            return {
                ...state,
                filter: {
                    term: action.payload.term,
                    friend: action.payload.friend,
                },
            }
        case ActionUsersTypes.FOLLOW:
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
        case ActionUsersTypes.UNFOLLOW:
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
        case ActionGeneralTypes.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        case ActionGeneralTypes.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload,
            }
        default:
            return state;
    }
}
