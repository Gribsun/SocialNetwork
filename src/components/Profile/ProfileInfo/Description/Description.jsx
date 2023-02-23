// core
import React, {useState} from "react";

// other
import icon from '../../../../public/settingsIcon.svg';

// styles
import style from './Description.module.css';

export const Description = ({fullName, isMyProfile, status, updateUserStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(status);
    const activateEditModeHandler = () => {
        setEditMode(true);
    };

    const deactivateEditModeHandler = () => {
        setEditMode(false);
        updateUserStatus(inputValue);
    };

    const inputHandler = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className={style.description}>
            <ul className={style.ul}>
                <li className={style.li}>
                    <h1>
                        {fullName}
                    </h1>
                </li>
                {editMode
                    ? <li className={style.inputLi}>
                        <input
                            value={inputValue}
                            onChange={event => inputHandler(event)}
                            onBlur={deactivateEditModeHandler}
                            placeholder='Your serious status'
                        />
                    </li>
                    : <li className={style.li}>
                        {status ? `Status: ${status}` : isMyProfile ? 'How are you?' : ''}
                        {isMyProfile &&
                            <img
                                src={icon}
                                alt='#'
                                onClick={activateEditModeHandler}
                                className={style.iconSettings}
                            />}
                    </li>
                }
                <li className={style.li}>
                    Website:
                    <a href='http://www.croteam.com/'>
                        http://www.croteam.com/
                    </a>
                </li>

            </ul>
        </div>
    )
}
