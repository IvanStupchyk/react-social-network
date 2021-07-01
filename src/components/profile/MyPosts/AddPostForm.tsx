import {reduxForm, Field, Form, InjectedFormProps} from "redux-form";
import s from "./MyPosts.module.scss";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type addPostFormType = {
    postMessage: string
}

const maxLength30 = maxLengthCreator(20)

export const AddPostForm: React.FC<InjectedFormProps<addPostFormType>> = (props) => {
    return (
        <Form onSubmit={props.handleSubmit} className={s.addPostBlock}>
            <button className={s.btnCreatePost}>Create post</button>
            <div>
                <Field
                    className={s.addPostForm}
                    component={Textarea}
                    name={'postMessage'}
                    placeholder={''}
                    maxLength={40}
                    validate={[required, maxLength30]}
                />
            </div>
        </Form>
    )
}

export const AddPostReduxForm = reduxForm<addPostFormType>({form: 'addPostForm'})(AddPostForm)
