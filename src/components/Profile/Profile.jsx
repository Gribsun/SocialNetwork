// core
import React, {useEffect} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

// components
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {Preloader} from '../common/Preloader/Preloader';

// Other
import mainPhoto from '../../public/big-serious-sam-history.jpg';
import {getActualContacts, getFullContactList, getProfileDataItems} from '../../helpers/profileDataHelpers';

// styles
import style from './Profile.module.css';

export const Profile = (
    {
        profile,
        isAuth,
        getUserProfile,
        getUserStatus,
        checkLogin,
        updateUserStatus,
        updateUserProfile,
        updatePhoto,
        setIsFetching,
        checkIsMyProfile
    }) => {
    const userId = +useParams().id;
    const myUserId = useSelector(store => store.auth.userId);
    const {isFetching} = profile;

    useEffect(() => {
        checkLogin();
        setIsFetching(true);
        checkIsMyProfile(!userId);
        if (userId) {
            getUserStatus({id: userId});
            getUserProfile({id: userId});
        } else {
            getUserStatus({id: myUserId});
            getUserProfile({id: myUserId});
        }
    }, [userId, myUserId]);
    if (!isAuth) return <Navigate to={'/login'}/>

    const {profileData, status, isMyProfile} = profile;
    const {photos} = profileData;

    const profileDataList = getProfileDataItems(profileData);
    const filterContactList = getActualContacts(profileData);
    const fullContactList = getFullContactList(profileData);

    return (isFetching ? <Preloader/> : <div className={style.profile}>
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
        />
        <PostsContainer/>
    </div>)
};
