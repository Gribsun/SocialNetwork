// core
import React from 'react';
import {useForm} from 'react-hook-form';

// styles
import style from './AddMessageForm.module.css';

export const AddMessageForm = ({addMessage}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        const {message} = data;
        addMessage(message);
    };

    return (
        <div className={style.messageInputWindow}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("message", {required: true})}
                       aria-invalid={errors.message ? "true" : "false"}
                       className={style.inputForm}
                />
                {errors.message?.type === 'required' && <p role="alert">!!!</p>}
                <input type="submit" className={style.buttonSubmit}/>
            </form>
        </div>
    )
}
