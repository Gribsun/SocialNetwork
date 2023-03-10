// core
import React, {FC} from 'react';
import {Navigate} from 'react-router-dom';
import {useForm, SubmitHandler} from 'react-hook-form';

// styles
import style from './LoginPage.module.css';

type FormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captchaUrl: undefined | string,
    message: string,
};

type LoginPagePropsType = {
    isAuth: boolean,
    captchaUrl: string | undefined,
    regExpEmail: RegExp,
    error: boolean,
    logIn: (email: string,
            password: string,
            rememberMe: boolean,
            captchaUrl: undefined | string
    ) => void,
}

export const LoginPage: FC<LoginPagePropsType> = (
    {
        isAuth,
        logIn,
        captchaUrl,
        regExpEmail,
        error
    }) => {

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormValuesType>({
        mode: 'onSubmit'
    });
    const onSubmit: SubmitHandler<FormValuesType> = (data): void => {
        const {email, password, rememberMe, captchaUrl} = data;
        logIn(email, password, rememberMe, captchaUrl);
    };

    if (isAuth) return <Navigate to={'/profile'}/>;

    return (
        <div className={style.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <label>Email</label>
                <input type='email'
                       {...register("email", {
                           required: true,
                           pattern: regExpEmail,
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
                {error && <label>Incorrect Email or Password</label>}
                {captchaUrl && <img src={captchaUrl} alt='#'/>}
                {captchaUrl && <input type='text'{...register("captchaUrl", {required: true})}
                                      aria-invalid={errors.message ? "true" : "false"}
                                      className={errors.captchaUrl ? style.inputFormError : style.inputForm}
                />}
                <input
                    type="submit"
                    disabled={!isValid}
                    value="Send"
                    className={isValid ? style.buttonSubmit : style.disabledButtonSubmit}
                />
            </form>
        </div>
    );
}
