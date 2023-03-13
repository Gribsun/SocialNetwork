// core
import React, {FC} from 'react';

// styles
import style from './AboutTheUser.module.css';

// types
import {IProfileUser} from '../../../../../init/types/profileTypes';

type AboutTheUserType = {
    data: IProfileUser,
}

export const AboutTheUser: FC<AboutTheUserType> = ({data}) => {
    const objKey = Object.keys(data)[0];
    // @ts-ignore
    const objValue = data[objKey];

    return (
        <>
            {objKey !== 'status' && <div className={style.wrapper}>
                {objKey}: {objValue}
            </div>}
        </>
    )
}
