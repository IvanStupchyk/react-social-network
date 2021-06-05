import React from 'react';
import s from './Dialogs.module.scss';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageReduxForm, FormAddMessageType} from "./AddMessageForm";

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    const messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    const addNewMessage = (values: FormAddMessageType) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>

            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}


