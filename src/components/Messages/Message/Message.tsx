// core
import React, {FC} from 'react';

// styles
import style from './Message.module.css';

export const Message: FC<{ message: string }> = ({message}) => {
    return (
        <div className={style.message}>
            {message}
        </div>
    )
};
