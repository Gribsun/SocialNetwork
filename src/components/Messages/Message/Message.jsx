// core
import React from 'react';

// styles
import style from './Message.module.css';

export const Message = ({message}) => {
    return (
        <div className={style.message}>
            {message}
        </div>
    )
};
