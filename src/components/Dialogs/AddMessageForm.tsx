import {Field, Form} from "redux-form";
import React from "react";

export const AddMessageForm = (props: any) => {
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