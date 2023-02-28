// core
import React from 'react';
import {NavLink} from 'react-router-dom';

// other
import altPhoto from '../../../public/users/Gnaar.png';

// styles
import style from './User.module.css';

export const User = ({
        id, name, photos,
        followed, status,
        followingInProgress,
        followUser, unfollowUser,
        setIsFollowingProgress
}) => {
    const {small} = photos;

    const subscribeHandle = (id) => {
        setIsFollowingProgress(true);
        followUser(id);
    }

    const unsubscribeHandle = (id) => {
        setIsFollowingProgress(true);
        unfollowUser(id);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.userLogo}>
                <NavLink to={`/profile/${id}`}>
                    <img
                        src={small ? small : altPhoto}
                        alt={altPhoto}
                        className={style.photo}
                    />
                </NavLink>

            </div>
            <div className={style.userInfo}>
                <div className={style.userName}>{name}</div>
                <div className={style.wrapperForButton}>
                    {followed
                        ? <button
                            onClick={() => unsubscribeHandle(id)}
                            disabled={followingInProgress}
                            className={style.unfollowButton}
                        >
                            Stop following
                        </button>
                        : <button
                            onClick={() => subscribeHandle(id)}
                            disabled={followingInProgress}
                            className={style.followButton}
                        >
                            Follow
                        </button>
                    }
                </div>
                <div>{status}</div>
            </div>
        </div>
    )
};
