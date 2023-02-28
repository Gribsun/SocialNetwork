// core
import React, {useEffect, useState} from 'react';

// components
import {Avatar} from './Avatar/Avatar';
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";

// styles
import style from './ProfileInfo.module.css';

export const ProfileInfo = (
    {
        profileDataList,
        filterContactList,
        fullContactList,
        photos,
        status,
        isMyProfile,
        updateUserProfile,
        updateUserStatus,
        updatePhoto
    }) => {
    const [inputValue, setInputValue] = useState(status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setInputValue(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateUserStatus(inputValue);
    };

    return (
        <div className={style.main}>
            {photos && <Avatar isMyProfile={isMyProfile} photos={photos} updatePhoto={updatePhoto}/>}
            {!editMode
                ? <ProfileData
                    profileDataList={profileDataList}
                    filterContactList={filterContactList}
                    status={status}
                    isMyProfile={isMyProfile}
                    activateEditMode={activateEditMode}
                    updateUserStatus={updateUserStatus}
                />
                : <ProfileDataForm
                    fullContactList={fullContactList}
                    deactivateEditMode={deactivateEditMode}
                    updateUserProfile={updateUserProfile}
                />
            }


        </div>
    )
}
