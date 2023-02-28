// core
import React from 'react';

// components
import {Post} from './Post/Post';
import {AddPostForm} from './AddPostForm/AddPostForm'

// styles
import style from './Posts.module.css';

const Posts = ({posts, addPost, isMyProfile}) => {
    return (isMyProfile && <div className={style.postsWrapper}>
            <AddPostForm addPost={addPost}/>
            <div className={style.postsList}>
                {posts.map(post => <Post
                    key={post.id}
                    id={post.id}
                    text={post.text}
                    title={post.title}
                    likesCount={post.likesCount}
                />)}
            </div>
        </div>)
}
export default React.memo(Posts);
