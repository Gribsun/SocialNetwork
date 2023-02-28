// core
import React, {useState, useEffect} from 'react';
import {Navigate, useParams} from 'react-router-dom';
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
        setIsFetching
    }) => {
    const userId = useParams();
    const myUserId = useSelector(store => store.auth.userId);
    const [isMyProfile, setIsMyProfile] = useState(false);
    const {isFetching} = profile;

    useEffect(() => {
        checkLogin();
        setIsFetching(true);
        if (!Object.keys(userId).length && myUserId) {
            getUserStatus({id: myUserId});
            getUserProfile({id: myUserId});
            setIsMyProfile(true);
        } else {
            getUserStatus(userId);
            getUserProfile(userId);
            setIsMyProfile(myUserId === +userId.id);
        }
    }, [userId, myUserId]);
    if (!isAuth) return <Navigate to={'/login'}/>

    const {profileData, status} = profile;
    const {photos} = profileData;

    const profileDataList = getProfileDataItems(profileData);
    const filterContactList = getActualContacts(profileData);
    const fullContactList = getFullContactList(profileData);

    return (
        isFetching
            ? <Preloader/>
            : <div className={style.profile}>
                <img
                    src={mainPhoto}
                    alt='#'
                    className={style.mainImage}
                />
                <ProfileInfo
                    profile={profile}
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
                <PostsContainer isMyProfile={isMyProfile}/>
            </div>
    )
};
