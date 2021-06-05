import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

export type FormAddMessageType = {
    newMessageBody: string
}

export const AddMessageForm: React.FC<InjectedFormProps<FormAddMessageType>> = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newMessageBody'}
                    placeholder={'Enter your message'}
                />
            </div>
            <div>
                <button>add</button>
            </div>
        </Form>
    )
}

export const AddMessageReduxForm = reduxForm<FormAddMessageType>({form: 'dialogAddMessageForm'})(AddMessageForm)