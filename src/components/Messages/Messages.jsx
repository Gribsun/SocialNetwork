// core
import React, {useRef, useState} from "react";

// components
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

// other
import {userDialogs} from "../../data/userDialogs";

// styles
import style from './Messages.module.css';

export const Messages = ({messages, addMessageHandle}) => {
    const [text, setText] = useState('');
    const ref = useRef();

    const changeHandle = (event) => {
        setText(event.target.value);
    }
    const updateMessageHandle = (text) => {
        addMessageHandle(text);
        setText('');
        ref.current.value = '';
    }

    return (
        <div className={style.wrapper}>
            <div className={style.dialogsItems}>
                {userDialogs.map(({id, name}) =>
                    <Dialog
                        key={id}
                        id={id}
                        name={name} />
                )}
            </div>
            <div className={style.messageWindow}>
                <div className={style.messages}>
                    {messages.map(({id, message}) =>
                        <Message
                            key={id}
                            id={id}
                            message={message} />
                    )}
                </div>
                <div className={style.messageInputWindow}>
                    <textarea
                        ref={ref}
                        onChange={changeHandle}
                        className={style.textarea}
                    />
                    <button
                        onClick={() => updateMessageHandle(text)}
                        className={style.button}
                    >
                        send
                    </button>
                </div>
            </div>
        </div>
    )
}
