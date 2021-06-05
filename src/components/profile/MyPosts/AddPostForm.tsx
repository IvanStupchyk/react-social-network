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
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={s.input_news}
                    component={Textarea}
                    name={'postMessage'}
                    placeholder={'post message'}
                    validate={[required, maxLength30]}
                />
            </div>

            <div>
                <button>Add post</button>
            </div>
        </Form>
    )
}

export const AddPostReduxForm = reduxForm<addPostFormType>({form: 'addPostForm'})(AddPostForm)
