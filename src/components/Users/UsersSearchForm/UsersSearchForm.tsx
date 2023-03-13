// core
import React, {FC, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

// other
import clear from '../../../public/clear.png'

// styles
import style from './UsersSearchForm.module.css';

// types
import {IFilter, IParsed} from '../types/UsersPageTypes';
import {changingFilterFriendsTypes} from '../../../helpers/usersSearchHelpers';

type FormValuesType = {
    term: string,
    friend: string,
    search: string,
    message: string,
};

type UsersSearchFormType = {
    parsedSearchParams: IParsed,
    onFilterChanged: (pageNumber: number, filter: IFilter) => void
}

export const UsersSearchForm: FC<UsersSearchFormType> = ({parsedSearchParams, onFilterChanged}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormValuesType>();
    const [termInForm, setTermInForm] = useState(parsedSearchParams.term);
    const [defaultValueForSelect, setDefaultValueForSelect] = useState(parsedSearchParams.friend);

    const onSubmit: SubmitHandler<FormValuesType> = (filter) => {
        const editedFilter = changingFilterFriendsTypes(filter);
        onFilterChanged(1, editedFilter);
    };

    const clearInputHandler = () => {
        reset(formValues => {
            onFilterChanged(1, {term: '', friend: null});
            setTermInForm('');
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
                       aria-invalid={errors.search ? 'true' : 'false'}
                       placeholder='Search'
                       value={termInForm ? termInForm : ''}
                       onChange={(event) => setTermInForm(event.target.value)}
                       className={style.inputForm}
                />
                <button onClick={clearInputHandler}
                >
                    <img src={clear} alt='#' className={style.buttonClearImg}/>
                </button>
            </div>
            <div className={style.selectAndSubmitWrapper}>
                <select
                    {...register('friend')}
                    defaultValue={String(defaultValueForSelect)}
                    className={style.selectFriend}>
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
                <input type='submit' value='search' className={style.buttonSubmit}/>
            </div>

        </form>
    )
}
