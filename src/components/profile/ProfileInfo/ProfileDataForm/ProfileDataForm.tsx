import React from "react";
import {ProfileContactsType, ProfileType} from "../../../../redux/profile-reducer";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";
import s from "../../../common/FormsControls/FormsControls.module.scss";

type ProfileDataFormType = {
    profile: ProfileType
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormType> & ProfileDataFormType> = ({handleSubmit, error, profile}) => {

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {   error &&
            <div className={s.formSummaryError}>
                Incorrect field: {error}
            </div>
            }

            <div><b>Full name: </b>
                <Field
                    placeholder={'full name'}
                    name={'fullName'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div><b>Looking for a job: </b>
                <Field
                    name={'lookingForAJob'}
                    type={'checkbox'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div><b>My professional skills:</b>
                <Field
                    placeholder={'My professional skills'}
                    name={'lookingForAJobDescription'}
                    component={Textarea}
                    validate={[required]}
                />
            </div>
            <div><b>About me:</b>
                <Field
                    placeholder={'About me'}
                    name={'AboutMe'}
                    component={Textarea}
                />
            </div>
            <div>
                <b>Contacts</b>{Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: </b>
                    <Field
                        placeholder={key}
                        name={`contacts.${key}`}
                        component={Input}
                    />
                </div>
            })}
            </div>
        </Form>
    )
}

export const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)