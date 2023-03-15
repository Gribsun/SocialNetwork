// core
import React, {ChangeEvent, FC} from 'react';

// Other
import {updatePhoto} from '../../../../init/actions/profileAction';
import avatar from '../../../../public/serious-sam.jpg';

// styles
import style from './Avatar.module.css';
import {useAppDispatch} from "../../../../hooks/redux-hooks";

type AvatarPropsType = {
    photos: {
        small: string | null,
        large: string | null,
    }
    editMode: boolean,
}

export const Avatar: FC<AvatarPropsType> = (
    {
        photos,
        editMode
    }) => {
    const dispatch = useAppDispatch();
    const {large} = photos;

    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.files && dispatch(updatePhoto(event.target.files[0]))
    }

    return (
        <div className={style.wrapper}>
            <img
                src={large ? large : avatar}
                alt='#'
                className={style.avatar}
            />
            {editMode && <input type="file" onChange={onMainPhotoSelected}/>}
        </div>
    )
}
