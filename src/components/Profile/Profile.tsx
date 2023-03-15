// core
import React, {FC, useState, useMemo} from 'react';
import {useAppSelector} from '../../hooks/redux-hooks';

// components
import Posts from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

// Other
import {useCheckProfile} from '../../hooks/useCheckProfile';
import {getProfileDataSelect} from '../../init/selectors/profile-selectors';
import {getActualContacts, getFullContactList, getProfileDataItems} from '../../helpers/profileDataHelpers';
import mainPhoto from '../../public/big-serious-sam-history.jpg';

// styles
import style from './Profile.module.css';

export const Profile: FC = () => {
    const profileData = useAppSelector(getProfileDataSelect);
    useCheckProfile();
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
            {!editMode && <Posts/>}
        </div>)
};
