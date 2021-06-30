import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {Navbar} from "./Navbar";

type MapDispatchPropsType = {
    logout: () => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class NavbarContainer extends React.Component<OwnPropsType, any> {
    render(): React.ReactNode {
        return (
            <Navbar
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
    connect(mapStateToProps, {logout})
)
(NavbarContainer)
