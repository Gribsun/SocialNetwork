// core
import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';


// components
import {User} from './User/User';
import {Preloader} from '../common/Preloader/Preloader';
import {UsersSearchForm} from './UsersSearchForm/UsersSearchForm';

// styles
import style from './Users.module.css';

const Users = (
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
                ? <Preloader/>
                : <div className={style.wrapper}>
                    <UsersSearchForm filter={filter} onFilterChanged={onFilterChanged}/>
                    <div className={style.buttonsWrapper}>
                        <button
                            disabled={currentPage === 1}
                            onClick={(event) => changePage(currentPage - 1)}
                            className={style.buttonPageChange}
                        >
                            previous
                        </button>
                        <button
                            disabled={currentPage === totalCount}
                            onClick={(event) => changePage(currentPage + 1)}
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

export default React.memo(Users);
