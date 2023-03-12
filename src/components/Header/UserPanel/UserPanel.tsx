// core
import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux-hooks';

// Other
import {logOut} from '../../../init/actions/authAction';
import logo from '../../../public/serious-sam.jpg';

// styles
import style from './UserPanel.module.css';

type UserPanelPropsType = {
    login: string,
}

export const UserPanel: FC<UserPanelPropsType> = ({login}) => {
    const dispatch = useAppDispatch();
    const {photos} = useAppSelector(state => state.profile.profileData);

    const LogoutHandler = () => {
        dispatch(logOut());
    }

    return (
        <div className={style.wrapper}>
            <div className={style.login}>
                {login}
            </div>
            <img
                src={photos.small ? photos.small : logo}
                alt='#'
                className={style.headerImage}
            />
            <button onClick={LogoutHandler} className={style.logout}>
                Logout
            </button>
        </div>
    )
}
