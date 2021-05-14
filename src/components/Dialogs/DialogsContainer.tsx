import React from 'react';
import {
    addMessage,
    DialogsPageType,
    updateNewMessageBody
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    updateNewMessageBody: (value: string) => void
    addMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageBody,
    addMessage
}) (Dialogs)
