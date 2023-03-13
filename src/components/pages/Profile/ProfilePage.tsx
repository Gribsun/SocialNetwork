// core
import React, {FC, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux-hooks';

// components
import {Profile} from '../../Profile/Profile';
import {Preloader} from '../../common/Preloader/Preloader';

// other
import {getIsFetchingSelect} from '../../../init/selectors/profile-selectors';
import {getIsAuthSelect} from '../../../init/selectors/auth-selectors';
import {checkLogin} from '../../../init/actions/authAction';

const ProfilePage: FC = () => {
    const dispatch = useAppDispatch();

    const isFetching = useAppSelector(getIsFetchingSelect);

    useEffect(() => {
        dispatch(checkLogin());
    }, [dispatch])

    const isAuth = useAppSelector(getIsAuthSelect);
    if (!isAuth) return <Navigate to={'/login'}/>;

    return (<>
        {isFetching
            ? <Preloader/>
            : <Profile/>}
    </>)
}
export default ProfilePage;
