// core
import React from "react";

// components
import {Avatar} from "./Avatar/Avatar";
import {Description} from "./Description/Description";

// styles
import style from './ProfileInfo.module.css';

export const ProfileInfo = ({profile}) => {
    const {fullName, photos} = profile;
    return (
        <div className={style.main}>
            <Avatar photos={photos} />
            <Description fullName={fullName} />
        </div>
    )
}
