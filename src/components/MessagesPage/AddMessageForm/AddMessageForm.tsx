// core
import React, {FC, useState, ChangeEvent} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

// styles
import style from './AddMessageForm.module.css';

type AddMessageFormProps = {
    addMessage: (text: string) => void,
}

type FormValuesType = {
    messageText: string,
    message: string,
};

export const AddMessageForm: FC<AddMessageFormProps> = ({addMessage}) => {
    const [text, setText] = useState('');
    const {register, handleSubmit, formState: {errors}} = useForm<FormValuesType>();

    const handlerInputText = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const onSubmit: SubmitHandler<FormValuesType> = data => {
        const {messageText} = data;
        addMessage(messageText);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.messageInputWindow}>
            <input {...register("messageText", {required: true})}
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
