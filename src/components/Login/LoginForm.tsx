import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {Field} from "redux-form";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
                Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)