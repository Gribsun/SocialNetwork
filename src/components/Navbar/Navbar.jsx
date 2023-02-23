// core
import React from 'react';
import {Link} from 'react-router-dom';

// styles
import style from './Navbar.module.css';

export const Navbar = () => {
    return (
        <ul className={style.ul}>
            <li className={style.li}>
                <Link to='/profile'>My profile</Link>
            </li>
            <li className={style.li}>
                <Link to='/messages'>Messages</Link>
            </li>
            <li className={style.li}>
                <Link to='/users'>Serious users</Link>
            </li>
            <li className={style.li}>
                <Link to='/news'>News</Link>
            </li>
            <li className={style.li}>
                <Link to='/music'>Music</Link>
            </li>
            <li className={style.li}>
                <Link to='/settings'>Settings</Link>
            </li>
        </ul>
    )
}
