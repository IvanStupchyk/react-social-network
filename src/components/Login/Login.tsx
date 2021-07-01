import React from "react";
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Redirect } from "react-router-dom";
import s from './LoginForm.module.scss'

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: null | string
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

type PropsType = MapDispatchPropsType & MapStatePropsType

const Login = (props: PropsType) => {
    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe, captcha} = formData

        props.login(email, password, rememberMe, captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.wrapperLogin}>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

export default connect(mapStateToProps, {login})(Login)