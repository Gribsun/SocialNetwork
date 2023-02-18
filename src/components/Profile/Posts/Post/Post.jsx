// core
import React from "react";

// styles
import style from './Post.module.css';

export const Post = ({id, text, title, likesCount}) => {
    return (
        <div className={style.post}>
            {title}
            {text}
            {likesCount}
        </div>
    )
}
