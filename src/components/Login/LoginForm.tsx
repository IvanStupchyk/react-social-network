import React, {ChangeEventHandler, useState} from "react";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import s from './LoginForm.module.scss'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
    captcha: string
}

type LoginFormType = {
    captchaUrl: null | string
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormType> & LoginFormType> = ({handleSubmit, error, captchaUrl}) => {
    const [captcha, setCaptcha] = useState('')

    const changeValueCaptcha = (e: ChangeEventHandler<HTMLInputElement> | any) => {
        setCaptcha(e.currentTarget.value)
    }
    const btnDisabled = captchaUrl ? !captcha : false
    return (
        <Form onSubmit={handleSubmit} className={s.loginForm}>
            <h3>Log In</h3>

            <Field placeholder={'hardtrynew@rambler.ru'}
                   name={'email'}
                   component={Input}
                   validate={[required]}
                   className={s.loginInput}/>

            <Field placeholder={'z,sdlek'}
                   name={'password'}
                   component={Input}
                   validate={[required]}
                   className={s.loginInput}/>

            <label className={s.rememberMeBlock}>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={Input}/>
                <span>Remember me</span>
            </label>
            <div className={s.captchaContainer}>
                {captchaUrl &&
                <div className={s.captchaImageContainer}>
                    <img alt={'captcha'} src={captchaUrl}/>
                </div>
                }

                {captchaUrl &&
                <Field
                    placeholder={'captcha'}
                    name={'captcha'}
                    component={Input}
                    className={s.captchaInput}
                    value={captcha}
                    onChange={changeValueCaptcha}
                />}
            </div>
            <div className={s.errorLogin}>
                {error &&
                <div className={s.formSummaryError}>
                    {error}
                </div>}
            </div>


            <button className={s.btnLogin} disabled={btnDisabled}>Login</button>
        </Form>

    )
}

export const LoginReduxForm = reduxForm<FormDataType, LoginFormType>({form: 'login'})(LoginForm)