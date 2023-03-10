// core
import React, {useState, useEffect} from "react";

// components
import {Contact} from './Contact/Contact';
import {AboutTheUser} from "./AboutTheUser/AboutTheUser";

// other
import icon from '../../../../public/settingsIcon.png';

// styles
import style from './ProfileData.module.css';

export const ProfileData = (
    {
        profileDataList,
        filterContactList,
        status,
        isMyProfile,
        activateEditMode,
        updateUserStatus
    }) => {
    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(status);
    useEffect(() => {
        setInputValue(status);
    }, [status]);

    const editStatusModeOn = () => {
        setEditMode(true);
    };

    const editStatusModeOff = () => {
        setEditMode(false);
        updateUserStatus(inputValue);
    };

    const inputHandler = (event) => {
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
                    {profileDataList && profileDataList.map(data =>
                        <AboutTheUser
                            key={Math.ceil(Math.random() * 1000)}
                            data={data}
                            isMyProfile={isMyProfile}
                        />)}
                </li>
                {filterContactList.length ? <li className={style.li}>
                    <div>Contacts:</div>
                    {filterContactList.map(contact => {
                        return (
                            <Contact
                                key={Math.ceil(Math.random() * 1000)}
                                contact={contact}
                                isMyProfile={isMyProfile}
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
