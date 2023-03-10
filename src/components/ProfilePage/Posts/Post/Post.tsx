// core
import React, {FC} from 'react';

// styles
import style from './Post.module.css';

type PostPropsType = {
    text: string,
    title: string,
    likesCount: number
}

export const Post: FC<PostPropsType> = ({text, title, likesCount}) => {
    return (
        <div className={style.post}>
            {title}
            {text}
            {likesCount}
        </div>
    )
}
