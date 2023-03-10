// core
import React, {FC} from 'react';

// components
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {AddMessageForm} from './AddMessageForm/AddMessageForm'

// other
import {userDialogs} from '../../data/userDialogs';

// styles
import style from './Messages.module.css';
import {Navigate} from "react-router-dom";

type MessageType = {
    id: number,
    message: string,
}

type MessagesPropsType = {
    isAuth: boolean,
    messages: Array<MessageType>,
    addMessage: (text: string) => void,
}
export const Messages: FC<MessagesPropsType> = (props) => {
    if (!localStorage.getItem('isAuth')) {
        return <Navigate to={'/login'}/>;
    }
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
                    {props.messages.map(({id, message}) =>
                        <Message
                            key={id}
                            message={message}
                        />
                    )}
                </div>
                <AddMessageForm addMessage={props.addMessage}/>
            </div>
        </div>
    )
}
