import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfileUser, getStatusUser, ProfileType, updateStatusUser} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: null | ProfileType
    isAuth: boolean
    status: string
    authorizedUserId: number | null
}

type MapDispatchPropsType = {
    getProfileUser: (userId: string) => void
    getStatusUser: (userId: string) => void
    updateStatusUser: (status: string) => void
}

export type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainer extends React.Component<PropsType, any> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId ? this.props.authorizedUserId.toString() : '2'
        }
        this.props.getProfileUser(userId)
        this.props.getStatusUser(userId)
    }

    render(): React.ReactNode {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatusUser={this.props.updateStatusUser}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
    }
 }


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfileUser,
        getStatusUser,
        updateStatusUser
    }),
    withRouter
)
(ProfileContainer)