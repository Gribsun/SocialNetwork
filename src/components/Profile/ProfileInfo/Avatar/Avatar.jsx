// core
import React from "react";

// Other
import avatar from "../../../../public/serious-sam.jpg";

// styles
import style from './Avatar.module.css';

export const Avatar = ({large}) => {
    return (
        <img
            src={large ? large : avatar}
            alt='#'
            className={style.avatar}
        />
    )
}
