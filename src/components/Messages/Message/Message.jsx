// core
import React from "react";

// styles
import style from './Message.module.css';

export const Message = ({id, message}) => {
    return (
        <div className={style.message}>
            {message}
        </div>
    )
};
