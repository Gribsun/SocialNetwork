// core
import React, {FC} from 'react';
import {Link} from 'react-router-dom';

// styles
import style from './Dialog.module.css';

type DialogPropsType = {
    id: number,
    name: string,
}

export const Dialog: FC<DialogPropsType> = ({id, name}) => {
    const path = `/messages/${id}`;
    return (
        <div className={style.dialog}>
            <Link to={path} className={style.userName}>{name}</Link>
        </div>
    )
}
