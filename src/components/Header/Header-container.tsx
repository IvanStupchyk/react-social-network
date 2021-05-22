import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUser} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapDispatchPropsType = {
    getAuthUser: () => void
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
        login: state.auth.data.login
    }
}


export default connect(mapStateToProps, {getAuthUser}) (HeaderContainer)
