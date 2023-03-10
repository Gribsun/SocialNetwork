// core
import React from "react";

// styles
import style from './AboutTheUser.module.css';

export const AboutTheUser = ({data}) => {
    const objKey = Object.keys(data);
    const objValue = ''+data[objKey];

    return (
        <div className={style.wrapper}>
            {objKey}: {objValue}
        </div>
    )
}
