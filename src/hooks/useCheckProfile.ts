import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './redux-hooks';
import {useParams} from 'react-router-dom';

import {checkIsMyProfile, getUserProfile, getUserStatus} from '../init/actions/profileAction';

export const useCheckProfile = () => {
    const dispatch = useAppDispatch();
    const userId = useParams().id;
    const myUserId = useAppSelector(state => state.auth.userId);
    useEffect(() => {
        const id = userId ? Number(userId) : myUserId;
        dispatch(getUserStatus(id));
        dispatch(getUserProfile(id));
        if (Number(userId) === myUserId) {
            dispatch(checkIsMyProfile(true));
        } else if (Boolean(userId)) {
            dispatch(checkIsMyProfile(false));
        } else {
            dispatch(checkIsMyProfile(true));
        }
    }, [dispatch, userId, myUserId]);
}
