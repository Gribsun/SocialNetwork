// core
import React, {useEffect} from 'react';

// components
import {User} from './User/User';
import {Preloader} from "../common/Preloader/Preloader";
import {UsersSearchForm} from "./UsersSearchForm/UsersSearchForm";

// styles
import style from './Users.module.css';
import {Navigate} from "react-router-dom";

export const Users = (
    {
        users, pageSize, currentPage, totalCount, filter, isAuth,
        setFilter, isFetching, followingInProgress,
        getUsers, followUser, unfollowUser,
        setIsFetching, setIsFollowingProgress,
    }
) => {
    useEffect(() => {
        setIsFetching(true);
        getUsers(pageSize, 1);
    }, []);

    const changePage = (pageNumber) => {
        setIsFetching(true);
        getUsers(pageSize, pageNumber, filter.term);
    }

    const onFilterChanged = (pageNumber, filter) => {
        setFilter(filter.term);
        getUsers(pageSize, 1, filter.term);
    }

    if (!isAuth) return <Navigate to={'/login'}/>

    return (
        <>
            {isFetching
                ? <Preloader />
                : <div className={style.wrapper}>
                    <UsersSearchForm filter={filter} onFilterChanged={onFilterChanged}/>
                    <div className={style.usersPage}>
                        <button
                            disabled={currentPage === 1}
                            onClick={(event) => changePage(currentPage-1)}
                            className={style.userPage}
                        >
                            previous
                        </button>
                        <button
                            disabled={currentPage === totalCount}
                            onClick={(event) => changePage(currentPage+1)}
                            className={style.userPage}
                        >
                            next
                        </button>
                    </div>
                    <div className={style.users}>
                        {users.length ? users.map(user =>
                            <User
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                photos={user.photos}
                                followed={user.followed}
                                status={user.status}
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
