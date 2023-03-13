// core
import React, {FC, useEffect} from 'react';
import {useAppDispatch} from "../../hooks/redux-hooks";

// components
import {Messages} from './Messages/Messages/Messages';
import {AddMessageForm} from './Messages/AddMessageForm/AddMessageForm';

// style
import style from './Chat.module.css';
import {startMessagesListening, stopMessagesListening} from "../../init/actions/chatAction";

export const Chat: FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        }
    }, []);

    return (
        <div className={style.wrapper}>
            <Messages/>
            <AddMessageForm/>
        </div>
    )
}
