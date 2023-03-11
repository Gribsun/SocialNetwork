// core
import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux-hooks';

// components
import {UsersSearchForm} from './UsersSearchForm/UsersSearchForm';
import {User} from './User/User';

// other
import {getUsers, setFilter} from '../../init/actions/usersAction';
import {
    getCurrentPageSelect,
    getFilterUsersSelect,
    getPageSizeSelect,
    getTotalCountSelect, getUserSelect
} from '../../init/selectors/users-selectors';

// types
import {FilterType} from './types/UsersPageTypes';

// styles
import style from './Users.module.css';

export const Users: FC = () => {
    const users = useAppSelector(getUserSelect);
    const pageSize = useAppSelector(getPageSizeSelect);
    const currentPage = useAppSelector(getCurrentPageSelect);
    const totalCount = useAppSelector(getTotalCountSelect);
    const filter = useAppSelector(getFilterUsersSelect);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsers(pageSize, 1, '', null));
    }, []);

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageSize, pageNumber, filter.term, filter.friend));
    }

    const onFilterChanged = (pageNumber: number, filter: FilterType) => {
        dispatch(setFilter(filter.term, filter.friend));
        dispatch(getUsers(pageSize, 1, filter.term, filter.friend));
    }

    return (
        <div className={style.wrapper}>
            <div className={style.buttonsWrapper}>
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChanged(currentPage - 1)}
                    className={style.buttonPageChange}
                >
                    previous
                </button>
                <UsersSearchForm onFilterChanged={onFilterChanged}/>
                <button
                    disabled={currentPage === totalCount || users.length < 5}
                    onClick={() => onPageChanged(currentPage + 1)}
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
                    />
                ) : null}
            </div>
        </div>
    )
}
