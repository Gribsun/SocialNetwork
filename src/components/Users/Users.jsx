// core
import React, {useEffect} from 'react';

// components
import {User} from './User/User';
import {Preloader} from "../common/Preloader/Preloader";

// styles
import style from './Users.module.css';

export const Users = (
    {
        users,
        pageSize,
        currentPage,
        pagesCount,
        isFetching,
        setUsers,
        followUser,
        unfollowUser,
        setIsFetching,
    }
) => {
    useEffect(() => {
        setIsFetching(isFetching = true);
        setUsers(pageSize, 1);
    }, []);
    const changePage = (page) => {
        if (page === currentPage) return null;
        setIsFetching(isFetching = true);
        setUsers(pageSize, page);
    }
    return (
        <>
            {isFetching
                ? <Preloader />
                : <div className={style.wrapper}>
                    <div className={style.usersPage}>
                        {pagesCount ? pagesCount.map(page =>
                            <button
                                key={page}
                                onClick={(event) => changePage(page)}
                                className={currentPage === page ? style.activePage : style.userPage}
                            >
                                {page}
                            </button>
                        ) : null}
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
                                followUser={followUser}
                                unfollowUser={unfollowUser}
                            />
                        ) : null}
                    </div>
                </div>
            }
        </>
    )
}
