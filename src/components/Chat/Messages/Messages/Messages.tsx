// core
import React, {FC} from 'react';

// components
import {Message} from './Message/Message';

// styles
import style from './Messages.module.css';
import {useAppSelector} from "../../../../hooks/redux-hooks";

export const Messages: FC = () => {
    const messages = useAppSelector(state => state.chat.messages);

    return (
        <div className={style.messagesWrapper}>
            {messages.length
                ? messages.map((item, index) =>
                    <Message
                        key={index}
                        userName={item.userName}
                        message={item.message}
                        photo={item.photo}
                    />)
                : <div>No messages</div>}
        </div>
    )
};
