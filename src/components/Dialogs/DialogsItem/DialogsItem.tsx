import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';


type propsDialogItem = {
    id: string
    name: string
}

const DialogItem = (props: propsDialogItem) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;