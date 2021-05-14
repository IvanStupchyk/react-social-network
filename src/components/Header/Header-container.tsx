import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/profile-reducer";

type MapDispatchPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<OwnPropsType, any> {
    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true
            }).then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
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
