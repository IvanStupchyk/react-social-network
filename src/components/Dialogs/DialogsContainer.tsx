import React from 'react';
import {
    addMessage,
    DialogsPageType
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../../redux/profile-reducer";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
    profile: null | ProfileType
}

type mapDispatchToPropsType = {
    addMessage: (message: string) => void
}

export type DialogsPropsType = MapStatePropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addMessage
    }),
    withAuthRedirect
)(Dialogs)


