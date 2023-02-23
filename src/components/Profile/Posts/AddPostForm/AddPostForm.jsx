// core
import React from 'react';

// styles
import style from './AddPostForm.module.css';

export const AddPostForm = ({addPostHandle}) => {
    const submit = (values) => {
        const {post} = values;
        addPostHandle(post);
    }

    return (<></>
        // <div className={style.messageInputWindow}>
        //     <Formik
        //         initialValues={{ post: '' }}
        //         onSubmit={submit}
        //     >
        //         {({
        //               values,
        //               handleChange,
        //               handleBlur,
        //               handleSubmit,
        //               isSubmitting,
        //           }) => (
        //             <form onSubmit={handleSubmit} className={style.form}>
        //                 <textarea
        //                     name='post'
        //                     value={values.post}
        //                     onChange={handleChange}
        //                     onBlur={handleBlur}
        //                     className={style.textarea}
        //                 />
        //                 <button type="submit" className={style.buttonSubmit}>
        //                     Submit
        //                 </button>
        //             </form>
        //         )}
        //     </Formik>
        // </div>
    )
}
