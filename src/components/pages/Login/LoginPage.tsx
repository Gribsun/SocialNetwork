// core
import React, {FC} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../../../hooks/redux-hooks";

// components
import {Login} from '../../Login/Login';

// other
import {getIsAuthSelect} from '../../../init/selectors/auth-selectors';

export const LoginPage: FC = () => {
    const isAuth = useAppSelector(getIsAuthSelect);
    if (isAuth && localStorage.getItem('isAuth')) return <Navigate to={'/profile'}/>;

    return (
        <Login />
    )
}
