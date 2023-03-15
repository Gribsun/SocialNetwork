// core
import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux-hooks';

// components
import {Messages} from './Messages/Messages';
import {AddMessageForm} from './Messages/AddMessageForm/AddMessageForm';

// other
import {startMessagesListening, stopMessagesListening} from '../../init/actions/chatAction';

// style
import style from './Chat.module.css';

export const Chat: FC = () => {
    const dispatch = useAppDispatch();
    const status = useAppSelector(state => state.chat.status);

    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        }
    }, []);

    return (<>
        {status === 'error' && <div>Error. Restart page.</div>}
        <div className={style.wrapper}>
            <Messages/>
            <AddMessageForm/>
        </div>
    </>)
}
