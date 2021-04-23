import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../Dialogs.module.scss';

type propsDialogItem = {
    id: string
    name: string
}

export const DialogItem = (props: propsDialogItem) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={`${s.dialog}`}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
