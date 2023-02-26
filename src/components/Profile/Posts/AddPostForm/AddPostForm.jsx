// core
import React from 'react';
import {useForm} from 'react-hook-form';

// styles
import style from './AddPostForm.module.css';

export const AddPostForm = ({addPost}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (values) => {
        const {post} = values;
        addPost(post);
    }

    return (
        <div className={style.messageInputWindow}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("post", {required: true})}
                       aria-invalid={errors.post ? "true" : "false"}
                       className={style.inputForm}
                />
                {errors.post?.type === 'required' && <p role="alert">Enter the post test</p>}
                <input type="submit" className={style.buttonSubmit}/>
            </form>
        </div>
    )
}
