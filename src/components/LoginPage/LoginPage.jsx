// core
import React from 'react';
import {Navigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

// styles
import style from './LoginPage.module.css';

export const LoginPage = ({logIn, isAuth}) => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        const {email, password, rememberMe} = data;
        logIn(email, password, rememberMe);
    };

    if (isAuth) return <Navigate to={'/profile'}/>

    return (
        <div className={style.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <label>Email</label>
                <input type='email'
                       {...register("email", {
                           required: true,
                           pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                       })}
                       aria-invalid={errors.message ? "true" : "false"}
                       className={errors.email ? style.inputFormError : style.inputForm}
                />
                {errors.email && <p className={style.textError}>invalid email</p>}
                <label>Password</label>
                <input type='password'
                       {...register("password", {
                           required: true,
                           minLength: 6,
                       })}
                       className={errors.password ? style.inputFormError : style.inputForm}
                />
                {errors.password && <p className={style.textError}>invalid password</p>}
                <div className={style.rememberMe}>
                    <label>Remember me</label>
                    <input type="checkbox"
                           {...register("rememberMe")}
                           className={style.inputCheckbox}
                    />
                </div>
                <input type="submit" value="Send" className={style.buttonSubmit}/>
            </form>
        </div>
    );
}
