// core
import React from 'react';

// components
import {Avatar} from './Avatar/Avatar';
import {Description} from './Description/Description';

// styles
import style from './ProfileInfo.module.css';

export const ProfileInfo = ({profile, isMyProfile, updateUserStatus}) => {
    const {fullName, photos, status} = profile;

    return (
        <div className={style.main}>
            {photos && <Avatar photos={photos}/>}
            <Description
                fullName={fullName}
                isMyProfile={isMyProfile}
                status={status}
                updateUserStatus={updateUserStatus}
            />
        </div>
    )
}
