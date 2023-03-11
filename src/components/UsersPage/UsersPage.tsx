// core
import React, {FC} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/redux-hooks';

// other
import {getIsFetchingSelect} from '../../init/selectors/users-selectors';
import {getIsAuthSelect} from '../../init/selectors/auth-selectors';

// components
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';

const UsersPage: FC = () => {
    const isFetching = useAppSelector(getIsFetchingSelect);

    const isAuth = useAppSelector(getIsAuthSelect);
    if (!isAuth) return <Navigate to={'/login'}/>;

    return (
        <>
            {isFetching
                ? <Preloader/>
                : <Users/>
            }
        </>
    )
}

export default UsersPage;
