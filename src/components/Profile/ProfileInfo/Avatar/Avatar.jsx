// core
import React from "react";

// Other
import avatar from "../../../../public/serious-sam.jpg";

// styles
import style from './Avatar.module.css';

export const Avatar = ({isMyProfile, photos, updatePhoto}) => {
    const {large} = photos;

    const onMainPhotoSelected = (event) => {
        updatePhoto(event.target.files[0]);
    }

    return (
        <div className={style.wrapper}>
            <img
                src={large ? large : avatar}
                alt='#'
                className={style.avatar}
            />
            {isMyProfile && <input type="file" onChange={onMainPhotoSelected}/>}
        </div>
    )
}
