import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {addMessageAC, messageChangeAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {
    const dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    const messageElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    const addMessage = () => {
        props.dispatch(addMessageAC())
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(messageChangeAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea value={props.dialogsPage.newMessage} onChange={onMessageChange}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;