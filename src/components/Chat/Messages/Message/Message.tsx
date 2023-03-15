// core
import React, {FC} from 'react';

// styles
import style from './Message.module.css';

type MessagePropsType = {
    userName: string,
    message: string,
    photo: string,
}

const Message: FC<MessagePropsType> = ({userName, message, photo}) => {
    return (
        <div className={style.messageWrapper}>
            <div className={style.userInfoInMessage}>
                <img src={photo} alt='#' className={style.userAvatarInMessage}/>
                <div className={style.userNameInChat}>
                    {userName}
                </div>
            </div>
            <div className={style.userMessage}>
                {message}
            </div>
        </div>
    )
};

export default React.memo(Message);
