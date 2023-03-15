// core
import React, {FC} from 'react';
import {useAppSelector} from '../../../hooks/redux-hooks';

// components
import {Post} from './Post/Post';
import {AddPostForm} from './AddPostForm/AddPostForm'

// other
import {getPostsSelect} from '../../../init/selectors/posts-selectors';
import {getIsMyProfileSelect} from '../../../init/selectors/profile-selectors';

// styles
import style from './Posts.module.css';

const Posts: FC = () => {
    const posts = useAppSelector(getPostsSelect);
    const isMyProfile = useAppSelector(getIsMyProfileSelect);

    return (
        <div className={style.postsWrapper}>
            {isMyProfile && <AddPostForm/>}
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
