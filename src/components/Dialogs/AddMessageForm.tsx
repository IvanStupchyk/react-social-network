import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import s from './Dialogs.module.scss';

export type FormAddMessageType = {
    newMessageBody: string
}

const maxLength100 = maxLengthCreator(100)

export const AddMessageForm: React.FC<InjectedFormProps<FormAddMessageType>> = (props) => {


    return (
        <Form onSubmit={props.handleSubmit} className={s.addMessageField}>
            <Field
                component={Textarea}
                validate={[required, maxLength100]}
                name={'newMessageBody'}
                placeholder={'Enter your message'}
            />
            <button>add</button>
        </Form>
    )
}

export const AddMessageReduxForm = reduxForm<FormAddMessageType>({form: 'dialogAddMessageForm'})(AddMessageForm)