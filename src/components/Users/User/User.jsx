// core
import React from 'react';
import {NavLink} from 'react-router-dom';

// other
import altPhoto from '../../../public/users/Gnaar.webp';

// styles
import style from './User.module.css';

export const User = ({id, name, photos, followed, status, followUser, unfollowUser}) => {
    const mainPhoto = photos.small;
    return (
        <div className={style.user}>
            <div className={style.userLogo}>
                <NavLink to={`/profile/${id}`}>
                    <img
                        src={mainPhoto ? mainPhoto : altPhoto}
                        alt={altPhoto}
                        className={style.photo}
                    />
                </NavLink>
                {name}
                {followed
                    ? <button
                        onClick={() => unfollowUser(id)}
                        className={style.unfollowButton}
                    >
                        unfollow
                    </button>
                    : <button
                        onClick={() => followUser(id)}
                        className={style.followButton}
                    >
                        follow
                    </button>
                }
            </div>
            {status}
        </div>
    )
};
