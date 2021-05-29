import React from 'react';
import {
    addMessage,
    DialogsPageType,
    updateNewMessageBody
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    updateNewMessageBody: (value: string) => void
    addMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        updateNewMessageBody,
        addMessage
    }),
    withAuthRedirect
)(Dialogs)


