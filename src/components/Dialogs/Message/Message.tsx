import React from 'react';
import s from '../Dialogs.module.scss';

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
