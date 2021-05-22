import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfileUser, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {Redirect} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: null | ProfileType
    isAuth: boolean
}

type MapDispatchPropsType = {
    getProfileUser: (userId: string) => void
}

export type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileAPIContainer extends React.Component<PropsType, any> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId || '2'

        this.props.getProfileUser(userId)
    }

    render(): React.ReactNode {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {getProfileUser}) (WithUrlDataContainerComponent)