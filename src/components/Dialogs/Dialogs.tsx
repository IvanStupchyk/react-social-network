import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import { Redirect } from 'react-router-dom';

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    const messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    const addMessage = () => props.addMessage()

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.updateNewMessageBody(e.currentTarget.value)

    if (!props.isAuth) return <Redirect to={'/login'}/>

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

