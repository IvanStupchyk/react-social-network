import React from 'react';
import s from './ProfileInfo.module.scss';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../images/userPhoto.png";

type ProfileInfoType = {
    profile: null | ProfileType
    status: string
    updateStatusUser: (status: string) => void
}

export const ProfileInfo = ({profile, status, updateStatusUser}: ProfileInfoType) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profile_information_container}>
            <div className={s.ava_container}>
                <img alt={'user avatar'} src={profile.photos.small !== null ? profile.photos.small : userPhoto} />
            </div>

            <div>
                <p className={s.user_name}>{profile.fullName}</p>
                <div>
                    <ProfileStatus status={status} updateStatusUser={updateStatusUser}/>
                    <ProfileStatusWithHooks status={status} updateStatusUser={updateStatusUser}/>
                </div>
                <p className={s.user_information}>Data of Birth: 7 october</p>
                <p className={s.user_information}>City: Brest</p>
                <p className={s.user_information}>{profile.lookingForAJob ? 'Looking for a job' : 'Don\'t looking for a job'}</p>
                <p className={s.user_information}>Education: GGTU'15</p>
                <p className={s.user_information}>Web Site: {profile.contacts.facebook}</p>
            </div>
        </div>
    )
}
