// core
import React, {useState, useEffect, FC, ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from '../../../../hooks/redux-hooks';

// components
import {Contact} from './Contact/Contact';
import {AboutTheUser} from './AboutTheUser/AboutTheUser';

// other
import {updateUserStatus} from '../../../../init/actions/profileAction';
import {getIsMyProfileSelect} from '../../../../init/selectors/profile-selectors';
import icon from '../../../../public/settingsIcon.png';

// styles
import style from './ProfileData.module.css';

// types
import {IProfileContacts} from '../../../../init/types/profileTypes';

type ProfileDataType = {
    profileDataList: Array<Record<string, string | boolean | number>>,
    filterContactList: Array<Record<string, IProfileContacts[keyof IProfileContacts]>>,
    status: string,
    activateEditMode: () => void,
}

export const ProfileData: FC<ProfileDataType> = (
    {
        profileDataList,
        filterContactList,
        status,
        activateEditMode
    }) => {
    const dispatch = useAppDispatch();
    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(status);

    const isMyProfile = useAppSelector(getIsMyProfileSelect);

    useEffect(() => {
        setInputValue(status);
    }, [status]);

    const editStatusModeOn = () => {
        setEditMode(true);
    };

    const editStatusModeOff = () => {
        setEditMode(false);
        dispatch(updateUserStatus(inputValue));
    };

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    return (
        <div className={style.wrapper}>
            <ul className={style.ul}>
                {editMode
                    ? <li className={style.li}>
                        <input
                            value={inputValue}
                            onChange={inputHandler}
                            onBlur={editStatusModeOff}
                            autoFocus={true}
                            className={style.statusInput}
                        />
                    </li>
                    : <li className={style.li} onDoubleClick={editStatusModeOn}>
                        {status ? `${status}` : isMyProfile ? 'How are you?' : ''}
                    </li>
                }
                <li className={style.li}>
                    {profileDataList.length && profileDataList.map(data =>
                        <AboutTheUser
                            key={Math.ceil(Math.random() * 1000)}
                            data={data}
                        />)}
                </li>
                {filterContactList.length ? <li className={style.li}>
                    <div>Contacts:</div>
                    {filterContactList.map(contact => {
                        return (
                            <Contact
                                key={Math.ceil(Math.random() * 1000)}
                                contact={contact}
                            />)
                    })}
                </li> : null}
            </ul>
            <div className={style.profileEdit}>
                {isMyProfile && <img src={icon} alt='#' onClick={activateEditMode} className={style.iconSettings}/>}
            </div>
        </div>
    )
}
