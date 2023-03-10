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
    isMyProfile: boolean,
    editMode: boolean,
    inputValue: string,
    activateEditMode: () => void,
    deactivateEditMode: (inputValue: string) => void,
    setInputValue: (value: string) => void,
    updateUserProfile: (profile: Omit<IProfileUser, 'photos'>) => void,
    updateUserStatus: (status: string) => void,
    updatePhoto: (photo: string) => void,
}

export const ProfileInfo: FC<ProfileInfoProps> = (
    {
        profileDataList,
        filterContactList,
        fullContactList,
        photos,
        status,
        isMyProfile,
        updateUserProfile,
        updateUserStatus,
        updatePhoto,
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
                    isMyProfile={isMyProfile}
                    photos={photos}
                    updatePhoto={updatePhoto}
                    editMode={editMode}
                />}
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
                    inputValue={inputValue}
                />
            }
        </div>
    )
}
