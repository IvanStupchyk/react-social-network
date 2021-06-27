import React from "react";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import s from '../common/FormsControls/FormsControls.module.scss'

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
    return (
        <Form onSubmit={handleSubmit} style={{width: '200px'}}>
            <div>
                <Field
                    placeholder={'email'}
                    name={'email'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={'password'}
                    name={'password'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type={'checkbox'}
                    name={'rememberMe'}
                    component={Input}
                    validate={[required]}
                />
                Remember me
            </div>

            {captchaUrl && <img alt={'captcha'} src={captchaUrl}/>}
            {captchaUrl &&
            <Field
                placeholder={'captcha'}
                name={'captcha'}
                component={Input}
                validate={[required]}
            />}

            {error &&
            <div className={s.formSummaryError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </Form>

    )
}

export const LoginReduxForm = reduxForm<FormDataType, LoginFormType>({form: 'login'})(LoginForm)