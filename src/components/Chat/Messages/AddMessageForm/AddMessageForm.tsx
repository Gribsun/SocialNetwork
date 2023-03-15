// core
import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../../../hooks/redux-hooks';

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
    const status = useAppSelector(state => state.chat.status);
    const {
        register,
        handleSubmit,
        formState,
        formState: {isDirty, isValid},
        reset,
        setFocus,
    } = useForm<FormValuesType>({defaultValues: {messageText: ''}});

    useEffect(() => {
        setFocus('messageText')
    }, [setFocus]);

    const onSubmit: SubmitHandler<FormValuesType> = (data) => {
        const {messageText} = data;
        dispatch(sendMessage(messageText));
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({messageText: ''});
        }
    }, [formState, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.messageInputWindow}>
            <input {...register('messageText', {required: true})}
                   className={style.inputForm}
                   placeholder='Write a message...'
            />
            <button
                disabled={status === 'pending' || !isDirty || !isValid}
                type='submit'
                className={style.buttonSubmit}
            >
                Send
            </button>
        </form>
    )
}
