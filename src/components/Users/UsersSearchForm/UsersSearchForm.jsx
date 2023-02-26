// core
import React from 'react';
import {useForm} from 'react-hook-form';

// styles
import style from './UsersSearchForm.module.css';

export const UsersSearchForm = ({onFilterChanged}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = filter => {
        onFilterChanged(1, filter);
    };

    return (
        <div className={style.form}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <input {...register("term", {required: true})}
                       aria-invalid={errors.search ? "true" : "false"}
                       className={style.inputForm}
                />
                {errors.message?.type === 'required' && <p role="alert">!!!</p>}
                <input type="submit" value='filter' className={style.buttonSubmit}/>
            </form>
        </div>
    );
}
