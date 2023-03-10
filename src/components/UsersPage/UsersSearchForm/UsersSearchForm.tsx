// core
import React, {FC, useCallback, useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

// other
import clear from '../../../public/clear.png'

// styles
import style from './UsersSearchForm.module.css';

// types
import {FilterType} from '../types/UsersPageTypes';

type FormValuesType = {
    term: string,
    search: string,
    message: string,
};

type UsersSearchFormType = {
    onFilterChanged: (pageNumber: number, filter: FilterType) => void
}

export const UsersSearchForm: FC<UsersSearchFormType> = ({onFilterChanged}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormValuesType>();

    const resetAsyncForm = useCallback(() => {
        const result = {term: ''};
        reset(result);
    }, [reset]);

    useEffect(() => {
        resetAsyncForm()
    }, [resetAsyncForm])

    const onSubmit: SubmitHandler<FormValuesType> = (filter) => {
        onFilterChanged(1, filter);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <div className={style.inputFormWitchClear}>
                <input {...register('term', {required: false})}
                       aria-invalid={errors.search ? 'true' : 'false'}
                       placeholder='Search'
                       className={style.inputForm}
                />
                <button onClick={() =>
                    reset(formValues => ({
                        ...formValues,
                        term: '',
                    }))}
                >
                    <img src={clear} alt='#' className={style.buttonClearImg}/>
                </button>
            </div>
            <input type='submit' value='search' className={style.buttonSubmit}/>
        </form>
    )
}
