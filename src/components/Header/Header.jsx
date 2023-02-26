// core
import React from 'react';
import {NavLink} from 'react-router-dom';

// components
import {UserPanel} from "./UserPanel/UserPanel";

// other
import logo from '../../public/logo.gif';

// styles
import style from './Header.module.css';

export const Header = ({isAuth, login, logOut}) => {
    return (
        <div className={style.header}>
            <img
                src={logo}
                alt='#'
                className={style.headerImage}
            />
            <div className={style.loginBlock}>
                {isAuth
                    ? <UserPanel login={login} logOut={logOut}/>
                    : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </div>
    )
}
