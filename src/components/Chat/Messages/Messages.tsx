// core
import React, {FC, useState, useEffect, useRef, UIEvent} from 'react';
import {useAppSelector} from '../../../hooks/redux-hooks';

// components
import Message from './Message/Message';

// styles
import style from './Messages.module.css';

export const Messages: FC = () => {
    const messages = useAppSelector(state => state.chat.messages);
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true);

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'});
        }
    }, [messages])

    const scrollHandler = (event: UIEvent<HTMLDivElement>) => {
        const element = event.currentTarget;
        if (Math.abs(element.scrollHeight - element.scrollTop) - element.clientHeight < 10) {
            if (!isAutoScroll) setIsAutoScroll(true);
        } else if (isAutoScroll) setIsAutoScroll(false);
    }

    return (
        <div onScroll={scrollHandler} className={style.messagesWrapper}>
            {messages.length
                ? <>
                    {messages.map((item) =>
                        <Message
                            key={item.id}
                            userName={item.userName}
                            message={item.message}
                            photo={item.photo}
                        />)}
                    <div ref={messagesAnchorRef}></div>
                </>
                : <div>No messages</div>}
        </div>
    )
};
