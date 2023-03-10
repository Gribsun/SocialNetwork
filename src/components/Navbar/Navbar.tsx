// core
import React, {FC} from 'react';
import {Link} from 'react-router-dom';

// styles
import style from './Navbar.module.css';

export const Navbar: FC = () => {
    return (
        <div className={style.navbarWrapper}>
            <ul className={style.ul}>
                <li className={style.li}>
                    <Link to='/profile'>My profile</Link>
                </li>
                <li className={style.li}>
                    <Link to='/users'>Serious users</Link>
                </li>
                <li className={style.li}>
                    <Link to='/chat'>Chat</Link>
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
        </div>
    )
}
