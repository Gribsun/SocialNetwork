// core
import React, {FC, useState, useEffect, useMemo} from 'react';
import {useParams} from 'react-router-dom';

// components
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

// Other
import mainPhoto from '../../public/big-serious-sam-history.jpg';
import {getActualContacts, getFullContactList, getProfileDataItems} from '../../helpers/profileDataHelpers';

// styles
import style from './Profile.module.css';

// types
import {useAppDispatch, useAppSelector} from '../../hooks/redux-hooks';
import {checkIsMyProfile, getUserProfile, getUserStatus} from '../../init/actions/profileAction';
import {getProfileDataSelect} from '../../init/selectors/profile-selectors';

export const Profile: FC = () => {
    const dispatch = useAppDispatch();

    const userId = useParams().id!;
    const myUserId = useAppSelector(state => state.auth.userId);

    useEffect(() => {
        dispatch(checkIsMyProfile(!userId));
        if (!userId || Number(userId) === myUserId) {
            const id = myUserId;
            dispatch(getUserStatus(id));
            dispatch(getUserProfile(id));
        } else {
            const id = Number(userId);
            dispatch(getUserStatus(id));
            dispatch(getUserProfile(id));
        }
    }, [dispatch, userId, myUserId]);

    const profileData = useAppSelector(getProfileDataSelect);

    const {photos, status} = profileData;

    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(status);

    const profileDataList = useMemo(() => getProfileDataItems(profileData), [profileData]);
    const filterContactList = useMemo(() => getActualContacts(profileData), [profileData]);
    const fullContactList = useMemo(() => getFullContactList(profileData), [profileData]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
    };

    return (
        <div className={style.profile}>
            <img
                src={mainPhoto}
                alt='#'
                className={style.mainImage}
            />
            <ProfileInfo
                profileDataList={profileDataList}
                fullContactList={fullContactList}
                filterContactList={filterContactList}
                photos={photos}
                status={status}
                editMode={editMode}
                activateEditMode={activateEditMode}
                deactivateEditMode={deactivateEditMode}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            {!editMode && <PostsContainer/>}
        </div>)
};
