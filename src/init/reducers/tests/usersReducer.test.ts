import {initialState, usersReducer} from '../usersReducer';
import {ActionUsersTypes} from '../../types/usersTypes';
import {mockUsersListFirstPage, mockUsersListSecondPage} from './mocks/mockUsersData';

let state = initialState;

beforeEach(() => {
    state = {
        users: mockUsersListFirstPage,
        pageSize: 5,
        totalCount: 5,
        currentPage: 1,
        isFetching: false,
        followingInProgress: false,
        filter: {
            term: '',
            friend: null,
        },
    }
})

describe('Check usersReducer', () => {
    it('has a default state', () => {
        expect(usersReducer(undefined, {type: 'unexpected'})).toEqual(initialState);
    })
    it('getting a list of users without a filter', () => {
        const newState = usersReducer(state, {
            type: ActionUsersTypes.GET_USERS,
            payload: {
                items: mockUsersListSecondPage,
                currentPage: 2,
                totalCount: 10,
            },
        })

        expect(newState.users.length).toBe(5);
        expect(newState.currentPage).toBe(2);
    })
    it('user subscription successful', () => {
        const newState = usersReducer(state, {
            type: ActionUsersTypes.FOLLOW,
            payload: 1,
        })

        expect(newState.users[0].followed).toBeFalsy();
        expect(newState.users[1].followed).toBeTruthy();
    })
    it('user unsubscribe is successful', () => {
        const newState = usersReducer(state, {
            type: ActionUsersTypes.UNFOLLOW,
            payload: 2,
        })

        expect(newState.users[0].followed).toBeFalsy();
        expect(newState.users[1].followed).toBeFalsy();
        expect(newState.users[2].followed).toBeFalsy();
    })
})
