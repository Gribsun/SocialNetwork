// core
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

// components
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {Preloader} from "../common/Preloader/Preloader";

// Other
import mainPhoto from '../../public/big-serious-sam-history.jpg';

// styles
import style from './Profile.module.css';

export const Profile = ({profile, setProfile, setIsFetching}) => {
    const userId = useParams();
    let {isFetching} = profile;
    useEffect(() => {
        setIsFetching(isFetching = true);
        setProfile(userId);
    }, []);

    return (
        isFetching
            ? <Preloader />
            : <div className={style.profile}>
                <img
                    src={mainPhoto}
                    alt='#'
                    className={style.mainImage}
                />
                <ProfileInfo profile={profile}/>
                <PostsContainer />
            </div>
    )
}
