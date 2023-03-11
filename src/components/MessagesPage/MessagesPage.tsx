// core
import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../../hooks/redux-hooks";

// components
import {Messages} from './Messages';

// other
import {getIsAuthSelect} from '../../init/selectors/auth-selectors';

const MessagesPage = () => {
    const isAuth = useAppSelector(getIsAuthSelect);
    if (!isAuth) return <Navigate to={'/login'}/>;

    return (
        <>
            <Messages/>
        </>
    )
}

export default MessagesPage;
