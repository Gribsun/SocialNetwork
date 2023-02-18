// core
import React from "react";

// Other
import logo from "../../public/logo.gif";

// styles
import style from './Header.module.css';

export const Header = () => {
    return (
        <div className={style.header}>
            <img
                src={logo}
                alt='#'
                className={style.headerImage}
            />
        </div>
    )
}
