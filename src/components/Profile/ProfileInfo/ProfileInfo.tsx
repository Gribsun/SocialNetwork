// core
import React, {FC, useEffect} from 'react';

// components
import {Avatar} from './Avatar/Avatar';
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileDataForm} from './ProfileDataForm/ProfileDataForm';

// styles
import style from './ProfileInfo.module.css';

// types
import {IProfileContacts, IProfileUser, UserPhotosType} from '../../../init/types/profileTypes';

type ProfileInfoProps = {
    profileDataList: Array<Record<string, IProfileUser[keyof IProfileUser]>>,
    filterContactList: Array<Record<string, IProfileContacts[keyof IProfileContacts]>>,
    fullContactList: Array<Record<string, IProfileContacts[keyof IProfileContacts]>>,
    photos: UserPhotosType
    status: string,
    editMode: boolean,
    inputValue: string,
    activateEditMode: () => void,
    deactivateEditMode: (inputValue: string) => void,
    setInputValue: (value: string) => void
}

export const ProfileInfo: FC<ProfileInfoProps> = (
    {
        profileDataList,
        filterContactList,
        fullContactList,
        photos,
        status,
        editMode,
        activateEditMode,
        deactivateEditMode,
        inputValue,
        setInputValue,
    }) => {

    useEffect(() => {
        setInputValue(status);
    }, [status]);

    return (
        <div className={style.main}>
            {photos
                && <Avatar
                    photos={photos}
                    editMode={editMode}
                />}
            {!editMode
                ? <ProfileData
                    profileDataList={profileDataList}
                    filterContactList={filterContactList}
                    status={status}
                    activateEditMode={activateEditMode}
                />
                : <ProfileDataForm
                    fullContactList={fullContactList}
                    deactivateEditMode={deactivateEditMode}
                    inputValue={inputValue}
                />
            }
        </div>
    )
}
