// core
import React, {FC} from 'react';

// Other
import logo from '../../../public/serious-sam.jpg';

// styles
import style from './UserPanel.module.css';

type UserPanelPropsType = {
    login: string,
    logOut: () => void,
}

export const UserPanel: FC<UserPanelPropsType> = ({login, logOut}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.login}>
                {login}
            </div>
            <img
                src={logo}
                alt='#'
                className={style.headerImage}
            />
            <button onClick={logOut} className={style.logout}>
                Logout
            </button>
        </div>
    )
}
