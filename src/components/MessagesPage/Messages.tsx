// core
import React, {FC} from 'react';
import {useAppSelector} from '../../hooks/redux-hooks';

// components
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {AddMessageForm} from './AddMessageForm/AddMessageForm'

// other
import {userDialogs} from '../../data/userDialogs';

// styles
import style from './Messages.module.css';

export const Messages: FC = () => {
    const messages = useAppSelector(state => state.messages);

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
                            message={message}
                        />
                    )}
                </div>
                <AddMessageForm/>
            </div>
        </div>
    )
}
