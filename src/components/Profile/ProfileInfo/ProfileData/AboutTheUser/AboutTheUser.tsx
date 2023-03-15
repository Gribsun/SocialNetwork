// core
import React, {FC} from 'react';

// styles
import style from './AboutTheUser.module.css';

// types
import {IProfileUser} from '../../../../../init/types/profileTypes';

type AboutTheUserType = {
    data: Record<string, string | boolean | number>,
}

export const AboutTheUser: FC<AboutTheUserType> = ({data}) => {
    const objKey: IProfileUser[keyof IProfileUser] = Object.keys(data)[0];
    const objValue = Object.values(data)[0];

    return (
        <>
            {objKey !== 'status' && <div className={style.wrapper}>
                {objKey}: {objValue}
            </div>}
        </>
    )
}
