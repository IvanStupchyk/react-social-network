import React from "react";
import {ProfileContactsType, ProfileType} from "../../../../redux/profile-reducer";
import s from "../ProfileInfo.module.scss";
import {ProfileStatus} from "../../ProfileStatus/ProfileStatus";

type ProfileDataType = {
    profile: ProfileType,
    status: string,
    updateStatusUser: (status: string) => void
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData = ({profile, status, updateStatusUser, isOwner, goToEditMode}: ProfileDataType) => {
    return (
        <div>
            {isOwner &&
            <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}

            <p className={s.user_name}><b>Full name: </b>{profile.fullName}</p>
            <div>
                <ProfileStatus status={status} updateStatusUser={updateStatusUser}/>
            </div>
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