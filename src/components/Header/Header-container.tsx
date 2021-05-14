import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

type MapDispatchPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<OwnPropsType, any> {
    componentDidMount(): void {
        authAPI.getAuthUser()
        .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
        })
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


export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)
