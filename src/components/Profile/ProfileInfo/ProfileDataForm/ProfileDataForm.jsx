// core
import React from 'react';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';

// styles
import style from './ProfileDataForm.module.css';

export const ProfileDataForm = (
    {
        fullContactList,
        updateUserProfile,
        deactivateEditMode
    }) => {
    const userId = useSelector(store => store.auth.userId);

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        const profile = {profileData: {}};
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
        profile.profileData.userId = +userId;
        profile.profileData.lookingForAJob = !!lookingForAJob;
        profile.profileData.lookingForAJobDescription = lookingForAJobDescription;
        profile.profileData.fullName = fullName;
        profile.profileData.aboutMe = aboutMe;
        profile.profileData.contacts = {facebook, website, vk, twitter, instagram, youtube, github, mainLink};
        updateUserProfile(profile);
        deactivateEditMode();
    };

    return (
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
            {fullContactList.length ? fullContactList.map((contact, index) => {
                const contactKey = '' + Object.keys(contact);
                return (
                    <div className={style.inputWrapper}>
                        <label className={style.label}>{contactKey}</label>
                        <input key={index} {...register(contactKey, {required: false})}
                               className={style.inputForm}/>
                    </div>
                )
            }) : null}
            <input type="submit" className={style.buttonSubmit}/>
        </form>
    )
}
