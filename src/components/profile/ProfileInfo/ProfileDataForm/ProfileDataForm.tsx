import React from "react";
import {ProfileType} from "../../../../redux/profile-reducer";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";
import s from "../../../common/FormsControls/FormsControls.module.scss";
import doubleCheckMark from '../../../../images/icons/doubleCheckMark.svg'

type ProfileDataFormType = {
    profile: ProfileType
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormType> & ProfileDataFormType> = ({handleSubmit, error, profile}) => {

    return (
        <Form onSubmit={handleSubmit} className={s.EditPersonalInformation}>
            <div className={s.fullNameAndSaveBtn}>
                <div className={s.marginBottomForSections}>
                    <b>Full name: </b>
                    <Field
                        placeholder={'full name'}
                        maxLength={25}
                        name={'fullName'}
                        component={Input}
                        validate={[required]}
                    />
                </div>
                <div className={s.marginBottomForSections}>
                    <button className={s.btnSaveProfileInfo}><span>save</span></button>
                    <div className={s.formSummaryError}>
                        {error}
                    </div>
                </div>
            </div>
            <div className={s.lookingForAJob}>
                <b>Looking for a job: </b>
                <Field
                    name={'lookingForAJob'}
                    type={'checkbox'}
                    component={Input}
                />
            </div>
            <div className={s.marginBottomForSections}>
                <b>My professional skills:</b>
                <Field
                    placeholder={'My professional skills'}
                    name={'lookingForAJobDescription'}
                    component={Textarea}
                    validate={[required]}
                />
            </div>
            <div className={s.marginBottomForSections}>
                <b>About me:</b>
                <Field
                    placeholder={'About me'}
                    name={'AboutMe'}
                    component={Textarea}
                />
            </div>
            <div>
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.marginBottomForSections}>
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