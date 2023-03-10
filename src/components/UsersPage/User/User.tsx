// core
import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

// other
import altPhoto from '../../../public/users/Gnaar.png';

// styles
import style from './User.module.css';

// types
import {UserType} from '../../../init/types/usersTypes';
type UserDataType = {
    followingInProgress: boolean,
}
type UserFunctionType = {
    followUser: (id: number) => void,
    unfollowUser: (id: number) => void,
    setIsFollowingProgress: (followingInProgress: boolean) => void,
}
type UserPropsType = Omit<UserType, 'status'> & UserDataType & UserFunctionType;

export const User: FC<UserPropsType> = ({
        id, name, photos,
        followed,
        followingInProgress,
        followUser, unfollowUser,
        setIsFollowingProgress
}) => {
    const {small} = photos;

    const subscribeHandle = (id: number) => {
        setIsFollowingProgress(true);
        followUser(id);
    }

    const unsubscribeHandle = (id: number) => {
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
            </div>
        </div>
    )
};
