// core
import React from 'react';

// components
import {Post} from './Post/Post';
import {AddPostForm} from './AddPostForm/AddPostForm'

// styles
import style from './Posts.module.css';

const Posts = ({posts, addPost}) => {
    return (
        <div className={style.posts}>
            <h1>My serious posts</h1>
            <AddPostForm addPost={addPost}/>
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
export default React.memo(Posts);
