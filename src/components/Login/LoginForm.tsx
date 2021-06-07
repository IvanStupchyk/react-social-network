import React from "react";
import {Form, InjectedFormProps, reduxForm} from "redux-form";
import {Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import s from '../common/FormsControls/FormsControls.module.scss'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <Form onSubmit={props.handleSubmit} style={{width: '200px'}}>
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
            {   props.error &&
                <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </Form>

    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)