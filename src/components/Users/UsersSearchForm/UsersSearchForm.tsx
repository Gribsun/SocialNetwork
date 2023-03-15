// core
import React, {FC, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

// other
import clear from '../../../public/clear.png'

// styles
import style from './UsersSearchForm.module.css';

// types
import {ActualFilterDataType, IFilter} from '../types/UsersPageTypes';
import {changingFilterFriendsTypes} from '../../../helpers/usersSearchHelpers';

type FormValuesType = {
    term: string,
    friend: string,
    search: string,
    message: string,
};

type UsersSearchFormType = {
    actualFilterData: ActualFilterDataType,
    onFilterChanged: (pageNumber: number, filter: IFilter) => void
}

export const UsersSearchForm: FC<UsersSearchFormType> = ({actualFilterData, onFilterChanged}) => {
    const {register, handleSubmit, reset} = useForm<FormValuesType>({
        defaultValues: {
            term: actualFilterData.actualTerm,
            friend: String(actualFilterData.actualFriend),
        }
    });
    const [defaultValueForSelect, setDefaultValueForSelect] = useState(actualFilterData.actualFriend);

    const onSubmit: SubmitHandler<FormValuesType> = (filter) => {
        const editedFilter = changingFilterFriendsTypes(filter);
        onFilterChanged(1, editedFilter);
    };

    const clearInputHandler = () => {
        reset(formValues => {
            onFilterChanged(1, {term: '', friend: null});
            setDefaultValueForSelect(null);
            return ({
                ...formValues,
                term: '',
                friend: 'null',
            })
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <div className={style.inputFormWitchClear}>
                <input {...register('term', {required: false})}
                       placeholder='Search'
                       className={style.inputForm}
                />
                <img src={clear} alt='#' onClick={clearInputHandler} className={style.buttonClearImg}/>
            </div>
            <div className={style.selectAndSubmitWrapper}>
                <select
                    {...register('friend')}
                    defaultValue={String(defaultValueForSelect)}
                    className={style.selectFriend}
                >
                    <option value='null' className={style.optionFriend}>
                        All users
                    </option>
                    <option value='true' className={style.optionFriend}>
                        Subscription users
                    </option>
                    <option value='false' className={style.optionFriend}>
                        Unsubscribed users
                    </option>
                </select>
                <input
                    type='submit'
                    value='Search'
                    className={style.buttonSubmit}
                />
            </div>

        </form>
    )
}
