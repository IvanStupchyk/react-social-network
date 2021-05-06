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

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         updateNewMessageBody: (value: string) => {
//             dispatch(messageChangeAC(value))
//         },
//         addMessage: () => {
//             dispatch(addMessageAC())
//         }
//     }
// }

export const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageBody,
    addMessage
}) (Dialogs)
