// core
import React from "react";

// Other
import avatar from "../../../../public/serious-sam.jpg";

// styles
import style from './Avatar.module.css';

export const Avatar = ({photos}) => {
    const {small, large} = photos;
    return (
        <img
            src={large ? large : avatar}
            alt='#'
            className={style.avatar}
        />
    )
}
