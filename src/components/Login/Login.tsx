import React from "react";
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Redirect } from "react-router-dom";

type MapStatePropsType = {
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

type PropsType = MapDispatchPropsType & MapStatePropsType

const Login = (props: PropsType) => {
    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe} = formData

        props.login(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(mapStateToProps, {login})(Login)