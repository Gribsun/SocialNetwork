// core
import React, {FC, useState, ChangeEvent} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

// styles
import style from './AddMessageForm.module.css';
import {addMessage} from "../../../init/actions/messagesAction";
import {useAppDispatch} from "../../../hooks/redux-hooks";

type FormValuesType = {
    messageText: string,
    message: string,
};

export const AddMessageForm: FC = () => {
    const dispatch = useAppDispatch();
    const [text, setText] = useState('');
    const {register, handleSubmit, formState: {errors}} = useForm<FormValuesType>();

    const handlerInputText = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const onSubmit: SubmitHandler<FormValuesType> = data => {
        const {messageText} = data;
        dispatch(addMessage(messageText));
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
