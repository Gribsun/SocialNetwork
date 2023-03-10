// core
import React, {FC, useState, ChangeEvent} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

// styles
import style from './AddPostForm.module.css';

type AddPostFormProps = {
    addPost: (text: string) => void,
}

type FormValuesType = {
    post: string,
    message: string,
};

export const AddPostForm: FC<AddPostFormProps> = ({addPost}) => {
    const [textareaValue, setTextareaValue] = useState('');
    const {register, handleSubmit, formState: {errors}} = useForm<FormValuesType>();

    const textareaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.target.value);
    }

    const onSubmit: SubmitHandler<FormValuesType> = (values) => {
        const {post} = values;
        addPost(post);
        setTextareaValue('');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.postForm}>
            <textarea {...register('post', {required: true})}
                      aria-invalid={errors.post ? 'true' : 'false'}
                      value={textareaValue}
                      onChange={textareaHandler}
                      className={style.textareaForm}
            />
            {errors.post?.type === 'required' && <p role='alert'>Enter the post</p>}
            <input type='submit' value='Add post' className={style.buttonSubmit}/>
        </form>
    )
}
