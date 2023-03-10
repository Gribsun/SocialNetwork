// core
import React, {FC} from 'react';

// components
import {Post} from './Post/Post';
import {AddPostForm} from './AddPostForm/AddPostForm'

// styles
import style from './Posts.module.css';

// types
import {PostsType} from '../../../init/types/postsTypes';

type PostsPropsType = {
    posts: PostsType,
    isMyProfile: boolean,
    addPost: (text: string) => void,
}

const Posts: FC<PostsPropsType> = ({posts, isMyProfile, addPost}) => {
    return (
        <div className={style.postsWrapper}>
            {isMyProfile && <AddPostForm addPost={addPost}/>}
            <div className={style.postsList}>
                {posts.map(post => <Post
                    key={post.id}
                    text={post.text}
                    title={post.title}
                    likesCount={post.likesCount}
                />)}
            </div>
        </div>
    )
}
export default React.memo(Posts);
