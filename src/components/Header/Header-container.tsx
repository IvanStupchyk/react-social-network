import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUser, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";

type MapDispatchPropsType = {
    getAuthUser: () => void
    logout: () => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<OwnPropsType, any> {
    componentDidMount(): void {
        this.props.getAuthUser()
    }

    render(): React.ReactNode {
        return (
            <Header
                isAuth = {this.props.isAuth}
                login={this.props.login}
                logout={this.props.logout}
                 />
        )
    }
}

type MapStatePropsType = {
    isAuth: boolean
    login: null | string
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getAuthUser, logout})
)
(HeaderContainer)
