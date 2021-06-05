import {reduxForm, Field, Form, InjectedFormProps} from "redux-form";
import s from "./MyPosts.module.scss";
import React from "react";

export type addPostFormType = {
    postMessage: string
}

export const AddPostForm: React.FC<InjectedFormProps<addPostFormType>> = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.input_news} component={'textarea'} name={'postMessage'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </Form>
    )
}

export const AddPostReduxForm = reduxForm<addPostFormType>({form: 'addPostForm'})(AddPostForm)
