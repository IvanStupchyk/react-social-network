import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getProfileUser,
    getStatusUser,
    savePhoto,
    ProfileType,
    updateStatusUser,
    saveProfile
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";

type PathParamsType = {
    userId: any
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
    savePhoto: (filePhoto: File) => void
    saveProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & {isOwner: boolean}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export class ProfileContainer extends React.Component<PropsType, any> {
    refreshProfile() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId ? this.props.authorizedUserId.toString() : this.props.history.push('/login')
        }
        this.props.getProfileUser(userId)
        this.props.getStatusUser(userId)
    }

    componentDidMount(): void {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<any>, snapshot?: any): void {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render(): React.ReactNode {

        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatusUser={this.props.updateStatusUser}
                savePhoto={this.props.savePhoto}
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
        updateStatusUser,
        savePhoto,
        saveProfile
    }),
    withRouter
)
(ProfileContainer)