// core
import React, {useState, useEffect} from "react";

// components
import {Contact} from './Contact/Contact';
import {AboutTheUser} from "./AboutTheUser/AboutTheUser";

// other
import icon from '../../../../public/settingsIcon.svg';

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

    const editModeOn = () => {
        setEditMode(true);
    };

    const editModeOff = () => {
        setEditMode(false);
        updateUserStatus(inputValue);
    };

    const inputHandler = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className={style.description}>
            <div>
                {isMyProfile && <button onClick={activateEditMode}>
                    Редактировать <img src={icon} alt='#'/>
                </button>}
            </div>
            <ul className={style.ul}>
                {editMode
                    ? <li className={style.inputLi}>
                        <input
                            value={inputValue}
                            onChange={inputHandler}
                            onBlur={editModeOff}
                            autoFocus={true}
                        />
                    </li>
                    : <li className={style.li}>
                        {status ? `Status: ${status}` : isMyProfile ? 'How are you?' : ''}
                        {isMyProfile &&
                            <img
                                src={icon}
                                alt='#'
                                onClick={editModeOn}
                                className={style.iconSettings}
                            />}
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
        </div>
    )
}
