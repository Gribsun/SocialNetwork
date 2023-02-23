// core
import React, {useState, useEffect} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

// components
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {Preloader} from "../common/Preloader/Preloader";

// Other
import mainPhoto from '../../public/big-serious-sam-history.jpg';

// styles
import style from './Profile.module.css';

export const Profile = ({profile, isAuth, getUserProfile, getUserStatus, checkLogin, updateUserStatus, setIsFetching}) => {
    const userId = useParams();
    const myUserId = useSelector(store => store.auth.userId);
    const [isMyProfile, setIsMyProfile] = useState(false);
    const {isFetching} = profile;

    useEffect(() => {
        checkLogin();
        if (!Object.keys(userId).length && myUserId) {
            setIsFetching(true);
            getUserStatus({id: myUserId});
            getUserProfile({id: myUserId});
            setIsMyProfile(true);
        } else {
            setIsFetching(true);
            getUserStatus(userId);
            getUserProfile(userId);
            setIsMyProfile(myUserId === +userId.id);
        }
    }, [userId, myUserId]);
    if (!isAuth) return <Navigate to={'/login'}/>
    return (
        isFetching
            ? <Preloader />
            : <div className={style.profile}>
                <img
                    src={mainPhoto}
                    alt='#'
                    className={style.mainImage}
                />
                <ProfileInfo profile={profile} isMyProfile={isMyProfile} updateUserStatus={updateUserStatus}/>
                <PostsContainer isMyProfile={isMyProfile}/>
            </div>
    )
}
