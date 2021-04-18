import React from 'react';
import s from './../Dialogs.module.css';

type propsMessage = {
    message: string
}

export const Message = (props: propsMessage) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}
