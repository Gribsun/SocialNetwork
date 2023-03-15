// core
import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {useAppSelector} from '../../hooks/redux-hooks';

// components
import {UserPanel} from './UserPanel/UserPanel';

// other
import {useTheme} from "../../hooks/useTheme";
import logo from '../../public/logo.gif';

// styles
import style from './Header.module.css';

export const Header: FC = () => {
    const {theme, setTheme} = useTheme();

    const {login} = useAppSelector(state => state.auth);
    const handleChangeTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }
    return (
        <div id='applicationPage' className={style.headerWrapper}>
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
                    {localStorage.getItem('isAuth')
                        ? login && <UserPanel login={login}/>
                        : <NavLink to={'/login'}>login</NavLink>}
                </div>
            </div>
        </div>
    )
}
