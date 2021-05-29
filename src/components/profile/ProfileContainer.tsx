import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfileUser, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

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

export class ProfileContainer extends React.Component<PropsType, any> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId || '2'

        this.props.getProfileUser(userId)
    }

    render(): React.ReactNode {

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


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileUser}),
    withRouter,
    // withAuthRedirect
)
(ProfileContainer)