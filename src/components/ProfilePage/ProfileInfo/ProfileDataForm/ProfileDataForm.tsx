// core
import React, {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

// other
import {useAppSelector} from '../../../../hooks/redux-hooks';

// styles
import style from './ProfileDataForm.module.css';

// types
import {IProfileContacts, IProfileUser} from '../../../../init/types/profileTypes';

type FormValuesType = {
    fullName: string,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string,
};

type ProfileDataFormPropsType = {
    fullContactList: Array<Record<keyof IProfileContacts, IProfileContacts[keyof IProfileContacts]>>,
    inputValue: string,
    updateUserProfile: (profile: Omit<IProfileUser, 'photos'>) => void,
    deactivateEditMode: (inputValue: string) => void,
}

export const ProfileDataForm: FC<ProfileDataFormPropsType> = (
    {
        fullContactList,
        updateUserProfile,
        deactivateEditMode,
        inputValue,
    }) => {
    const userId = useAppSelector(store => store.auth.userId);

    const {register, handleSubmit, formState: {errors}} = useForm<FormValuesType>();

    const onSubmit: SubmitHandler<FormValuesType> = (data) => {
        const profileData: Omit<IProfileUser, 'photos'> = {
            userId: null,
            fullName: '',
            aboutMe: '',
            lookingForAJob: false,
            lookingForAJobDescription: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            }
        };
        const {
            aboutMe,
            fullName,
            lookingForAJob,
            lookingForAJobDescription,
            facebook,
            website,
            vk,
            twitter,
            instagram,
            youtube,
            github,
            mainLink
        } = data;
        profileData.userId = userId ? +userId : null;
        profileData.lookingForAJob = !!lookingForAJob;
        profileData.lookingForAJobDescription = lookingForAJobDescription;
        profileData.fullName = fullName;
        profileData.aboutMe = aboutMe;
        profileData.contacts = {facebook, website, vk, twitter, instagram, youtube, github, mainLink};
        updateUserProfile(profileData);
        deactivateEditMode(inputValue);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={style.inputsForm}>
                <div className={style.inputWrapper}>
                    <label className={style.label}>fullName</label>
                    <input {...register('fullName', {required: true})}
                           className={style.inputForm}/>
                </div>
                <div className={style.inputWrapper}>
                    <label className={style.label}>aboutMe</label>
                    <input {...register('aboutMe', {required: true})}
                           className={style.inputForm}/>
                </div>
                <div className={style.inputWrapper}>
                    <label className={style.label}>lookingForAJob</label>
                    <input {...register('lookingForAJob', {required: false})}
                           type='checkbox'
                           className={style.inputForm}/>
                </div>
                <div className={style.inputWrapper}>
                    <label className={style.label}>lookingForAJobDescription</label>
                    <input {...register('lookingForAJobDescription', {required: false})}
                           className={style.inputForm}/>
                </div>
                {fullContactList.length ? fullContactList.map(contact => {
                    //@ts-ignore
                    const contactKey: keyof IProfileContacts = Object.keys(contact)[0];
                    return (
                        <div
                            key={Math.random() * 100 + Math.random() * 100 + Math.random() * 100}
                            className={style.inputWrapper}>
                            <label className={style.label}>{contactKey}</label>
                            <input
                                {...register(contactKey, {required: false})}
                                className={style.inputForm}/>
                        </div>
                    )
                }) : null}
                <input type="submit" className={style.buttonSubmit}/>
            </form>
            <button onClick={(event) => deactivateEditMode(inputValue)} className={style.buttonSubmit}>
                Exit the settings
            </button>
        </>

    )
}
