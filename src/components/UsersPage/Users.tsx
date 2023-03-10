// core
import React, {FC, useEffect} from 'react';
import {Navigate} from 'react-router-dom';

// components
import {Preloader} from '../common/Preloader/Preloader';
import {UsersSearchForm} from './UsersSearchForm/UsersSearchForm';
import {User} from './User/User';

// types
import {UsersPropsType} from './types/UsersPageTypes';

// styles
import style from './Users.module.css';

const Users: FC<UsersPropsType> = (
    {
        isAuth, users, pageSize,
        currentPage, totalCount, filter,
        setFilter, isFetching, followingInProgress,
        getUsers, followUser, unfollowUser,
        setIsFetching, setIsFollowingProgress
    }
) => {
    useEffect(() => {
        setIsFetching(true);
        getUsers(pageSize, 1);
    }, [isAuth]);

    if (!localStorage.getItem('isAuth')) {
        return <Navigate to={'/login'}/>;
    }

    const changePage = (pageNumber: number) => {
        setIsFetching(true);
        getUsers(pageSize, pageNumber, filter.term);
    }

    const onFilterChanged = (pageNumber: number, filter: { term: string }) => {
        setFilter(filter.term);
        getUsers(pageSize, 1, filter.term);
    }

    return (
        <>
            {isFetching
                ? <Preloader/>
                : <div className={style.wrapper}>
                    <div className={style.buttonsWrapper}>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => changePage(currentPage - 1)}
                            className={style.buttonPageChange}
                        >
                            previous
                        </button>
                        <UsersSearchForm onFilterChanged={onFilterChanged}/>
                        <button
                            disabled={currentPage === totalCount}
                            onClick={() => changePage(currentPage + 1)}
                            className={style.buttonPageChange}
                        >
                            next
                        </button>
                    </div>
                    <div className={style.usersList}>
                        {users.length ? users.map(user =>
                            <User
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                photos={user.photos}
                                followed={user.followed}
                                uniqueUrlName={user.uniqueUrlName}
                                followingInProgress={followingInProgress}
                                followUser={followUser}
                                unfollowUser={unfollowUser}
                                setIsFollowingProgress={setIsFollowingProgress}
                            />
                        ) : null}
                    </div>
                </div>
            }
        </>
    )
}

export default React.memo(Users);
