// core
import React, {FC, useState, useEffect, useMemo} from 'react';
import {Navigate, useParams} from 'react-router-dom';

// components
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {Preloader} from '../common/Preloader/Preloader';

// Other
import mainPhoto from '../../public/big-serious-sam-history.jpg';
import {getActualContacts, getFullContactList, getProfileDataItems} from '../../helpers/profileDataHelpers';

// styles
import style from './Profile.module.css';

// types
import {IProfileState, IProfileUser} from '../../init/types/profileTypes';
import {useAppSelector} from '../../hooks/redux-hooks';

type ProfilePropsType = {
    isAuth: boolean,
    profile: IProfileState,
    getUserProfile: (id: number | null) => void,
    getUserStatus: (id: number | null) => void,
    checkLogin: () => void,
    updateUserStatus: (status: string) => void,
    updateUserProfile: (profile: Omit<IProfileUser, 'photos'>) => void,
    updatePhoto: (photo: string) => void,
    setIsFetching: (isFetching: boolean) => void,
    checkIsMyProfile: (isMyProfile: boolean) => void,
}

export const Profile: FC<ProfilePropsType> = (
    {
        isAuth,
        profile,
        getUserProfile,
        getUserStatus,
        checkLogin,
        updateUserStatus,
        updateUserProfile,
        updatePhoto,
        setIsFetching,
        checkIsMyProfile
    }) => {
    const userId = useParams().id;
    const myUserId = useAppSelector(store => store.auth.userId);
    const {profileData, status, isMyProfile} = profile;
    const {photos} = profileData;
    const {isFetching} = profile;

    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(status);

    useEffect(() => {
        checkLogin();
        setIsFetching(true);
        checkIsMyProfile(!userId);
        if (userId) {
            const id = userId ? +userId : null;
            getUserStatus(id);
            getUserProfile(id);
        } else {
            const id = myUserId ? +myUserId : null;
            getUserStatus(id);
            getUserProfile(id);
        }
    }, [userId, myUserId]);

    const profileDataList = useMemo(() => getProfileDataItems(profileData), [profileData]);
    const filterContactList = useMemo(() => getActualContacts(profileData), [profileData]);
    const fullContactList = useMemo(() => getFullContactList(profileData), [profileData]);

    if (!isAuth) return <Navigate to={'/login'}/>;

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = (inputValue: string) => {
        setEditMode(false);
        updateUserStatus(inputValue);
    };

    return (isFetching
        ? <Preloader/>
        : <div className={style.profile}>
            <img
                src={mainPhoto}
                alt='#'
                className={style.mainImage}
            />
            <ProfileInfo
                profileDataList={profileDataList}
                fullContactList={fullContactList}
                filterContactList={filterContactList}
                photos={photos}
                status={status}
                isMyProfile={isMyProfile}
                updateUserProfile={updateUserProfile}
                updateUserStatus={updateUserStatus}
                updatePhoto={updatePhoto}
                editMode={editMode}
                activateEditMode={activateEditMode}
                deactivateEditMode={deactivateEditMode}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            {!editMode && <PostsContainer/>}
        </div>)
};
