import React from "react";
import {ProfileContactsType, ProfileType} from "../../../../redux/profile-reducer";
import s from "../ProfileInfo.module.scss";

type ProfileDataType = {
    profile: ProfileType,
}

export const ProfileData = ({profile}: ProfileDataType) => {
    return (
        <div>

            <p className={s.user_name}><b>Full name: </b>{profile.fullName}</p>

            <p><b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}</p>
            <p className={s.user_information}><b>About me: </b>{profile.aboutMe}</p>
            <p className={s.user_information}><b>My professional
                skills: </b>{profile.lookingForAJobDescription}</p>
            <p className={s.user_information}>Web Site: {profile.contacts.facebook}</p>
            <div>
                <b>Contacts</b>
                {Object
                    .keys(profile.contacts)
                    .map(key => {
                return <div key={key}>
                    <p>{key}:</p><p>{profile.contacts[key as keyof ProfileContactsType]}</p>
                </div>
            })}
            </div>
        </div>
    )
}