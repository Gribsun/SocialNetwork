// core
import React from 'react';
import {NavLink} from 'react-router-dom';

// components
import {UserPanel} from './UserPanel/UserPanel';

// other
import {useTheme} from "../../hooks/useTheme";
import logo from '../../public/logo.gif';

// styles
import style from './Header.module.css';

export const Header = ({isAuth, login, logOut}) => {
    const {theme, setTheme} = useTheme();

    const handleChangeTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    return (
        <div className={style.header}>
            <img
                src={logo}
                alt='#'
                className={style.headerImage}
            />
            <button onClick={handleChangeTheme} className={style.themeToggleButton}>
                {`${theme}`}
            </button>
            <div className={style.loginBlock}>
                {isAuth
                    ? <UserPanel login={login} logOut={logOut}/>
                    : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </div>
    )
}
