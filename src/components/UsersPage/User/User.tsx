// core
import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux-hooks';

// other
import altPhoto from '../../../public/users/Gnaar.png';
import {followUser, setIsFollowingProgress, unfollowUser} from '../../../init/actions/usersAction';
import {getFollowingInProgressSelect} from '../../../init/selectors/users-selectors';

// styles
import style from './User.module.css';

// types
import {UserType} from '../../../init/types/usersTypes';

type UserPropsType = Omit<UserType, 'status'>;

export const User: FC<UserPropsType> = ({id, name, photos, followed}) => {
    const dispatch = useAppDispatch();
    const followingInProgress = useAppSelector(getFollowingInProgressSelect);

    const {small} = photos;

    const subscribeHandle = (id: number) => {
        dispatch(setIsFollowingProgress(true));
        dispatch(followUser(id));
    }

    const unsubscribeHandle = (id: number) => {
        dispatch(setIsFollowingProgress(true));
        dispatch(unfollowUser(id));
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
