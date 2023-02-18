// core
import React from "react";
import {Link} from "react-router-dom";

// styles
import style from './Dialog.module.css';

export const Dialog = ({id, name}) => {
    const path = `/messages/${id}`;
    return (
        <div className={style.dialog}>
            <Link to={path}>{name}</Link>
        </div>
    )
}
