// core
import React from 'react';

// components
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {AddMessageForm} from './AddMessageForm/AddMessageForm'

// other
import {userDialogs} from '../../data/userDialogs';

// styles
import style from './Messages.module.css';
import {Navigate} from "react-router-dom";

export const Messages = ({isAuth, messages, addMessage}) => {
    if (!isAuth) return <Navigate to={'/login'}/>
    return (
        <div className={style.wrapper}>
            <div className={style.dialogsItems}>
                {userDialogs.map(({id, name}) =>
                    <Dialog
                        key={id}
                        id={id}
                        name={name}/>
                )}
            </div>
            <div className={style.messageWindow}>
                <div className={style.messages}>
                    {messages.map(({id, message}) =>
                        <Message
                            key={id}
                            id={id}
                            message={message}/>
                    )}
                </div>
                <AddMessageForm addMessage={addMessage}/>
            </div>
        </div>
    )
}
