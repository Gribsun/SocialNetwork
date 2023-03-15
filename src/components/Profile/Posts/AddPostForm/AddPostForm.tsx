// core
import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAppDispatch} from '../../../../hooks/redux-hooks';

// other
import {addPost} from '../../../../init/actions/postsAction';

// styles
import style from './AddPostForm.module.css';

type FormValuesType = {
    post: string,
    message: string,
};

export const AddPostForm: FC = () => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState,
        formState: {isDirty, isValid},
        reset
    } = useForm<FormValuesType>({defaultValues: {post: ''}});

    const onSubmit: SubmitHandler<FormValuesType> = (values) => {
        const {post} = values;
        dispatch(addPost(post));
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({post: ''});
        }
    }, [formState, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.postForm}>
            <textarea {...register('post', {required: true})}
                      className={style.textareaForm}
                      placeholder={'What\'s new with you?'}
            />
            <input
                disabled={!isDirty || !isValid}
                type='submit'
                value='Add post'
                className={style.buttonSubmit}/>
        </form>
    )
}
