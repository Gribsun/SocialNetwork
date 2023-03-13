// core
import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux-hooks';
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom';

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
import {IFilter} from './types/UsersPageTypes';

// styles
import style from './Users.module.css';
import {conversionParameterToURL, initialURLCheckAndGenerationUserList} from "../../helpers/usersSearchHelpers";

export const Users: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams(location.search);
    const parsedSearchParams = Object.fromEntries([...searchParams]);

    const users = useAppSelector(getUserSelect);
    const pageSize = useAppSelector(getPageSizeSelect);
    const currentPage = useAppSelector(getCurrentPageSelect);
    const totalCount = useAppSelector(getTotalCountSelect);
    const filter = useAppSelector(getFilterUsersSelect);

    useEffect(() => {
        // @ts-ignore
        const {actualTerm, actualFriend, actualCurrentPage} = initialURLCheckAndGenerationUserList(parsedSearchParams, filter);
        dispatch(setFilter(actualTerm, actualFriend));
        dispatch(getUsers(pageSize, actualCurrentPage, actualTerm, actualFriend));
        // @ts-ignore
        const result = conversionParameterToURL(parsedSearchParams);
        navigate(`/users?${result}`);
    }, []);

    useEffect(() => {
        const parsed = {
            term: filter.term,
            friend: filter.friend,
            page: currentPage,
        };
        //@ts-ignore
        const result = conversionParameterToURL(parsed);
        navigate(`/users?${result}`);
    }, [filter, currentPage]);

    useEffect(() => {
        return () => {
            dispatch(setFilter('', null));
        }
    }, []);

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageSize, pageNumber, filter.term, filter.friend));
    }

    const onFilterChanged = (pageNumber: number, filter: IFilter) => {
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
                {/*@ts-ignore*/}
                <UsersSearchForm onFilterChanged={onFilterChanged} parsedSearchParams={parsedSearchParams}/>
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
                ) : <div>No users found</div>}
            </div>
        </div>
    )
}
