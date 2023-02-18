// core
import React, {useState, useRef} from 'react';

// components
import {Post} from "./Post/Post";

// styles
import style from './Posts.module.css';

export const Posts = ({posts, addPostHandle}) => {
    const [text, setText] = useState('');
    const ref = useRef();

    const updatePostHandler = (text) => {
        addPostHandle(text);
        setText('');
        ref.current.value = '';
    }

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className={style.posts}>
            <h1>My serious posts</h1>
            <textarea
                ref={ref}
                onChange={handleChange}
                placeholder='whats new?'
                className={style.textarea}
            />
            <button
                onClick={() => updatePostHandler(text)}
                className={style.addButton}
            >
                add
            </button>
            {posts.map(post =>
                <Post
                    key={post.id}
                    id={post.id}
                    text={post.text}
                    title={post.title}
                    likesCount={post.likesCount}
                />
            )}
        </div>
    )
}
