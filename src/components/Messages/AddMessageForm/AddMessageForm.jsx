// core
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

// styles
import style from './AddMessageForm.module.css';

export const AddMessageForm = ({addMessage}) => {
    const [text, setText] = useState('');
    const {register, handleSubmit, formState: {errors}} = useForm();

    const handlerInputText = (event) => {
        setText(event.target.value);
    }

    const onSubmit = data => {
        const {message} = data;
        setText('');
        addMessage(message);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.messageInputWindow}>
            <input {...register("message", {required: true})}
                   aria-invalid={errors.message ? "true" : "false"}
                   value={text}
                   onChange={handlerInputText}
                   className={style.inputForm}
            />
            {errors.message?.type === 'required' && <p role="alert">!!!</p>}
            <input type="submit" className={style.buttonSubmit} />
        </form>
    )
}
