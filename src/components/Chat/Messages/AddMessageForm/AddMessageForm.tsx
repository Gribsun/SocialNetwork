// core
import React, {FC, useState, ChangeEvent} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAppDispatch} from '../../../../hooks/redux-hooks';

// other
import {sendMessage} from '../../../../init/actions/chatAction';

// styles
import style from './AddMessageForm.module.css';

type FormValuesType = {
    messageText: string,
    message: string,
};

export const AddMessageForm: FC = () => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState('');
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');
    const {register, handleSubmit, formState: {errors}} = useForm<FormValuesType>();

    const handlerInputText = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSubmit: SubmitHandler<FormValuesType> = data => {
        const {messageText} = data;
        if (!messageText) {
            return
        }
        dispatch(sendMessage(messageText));
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.messageInputWindow}>
            <input {...register("messageText", {required: true})}
                   aria-invalid={errors.message ? "true" : "false"}
                   value={inputValue}
                   onChange={handlerInputText}
                   className={style.inputForm}
            />
            {errors.message?.type === 'required' && <p role="alert">!!!</p>}
            <input disabled={false} type="submit" className={style.buttonSubmit} />
        </form>
    )
}
