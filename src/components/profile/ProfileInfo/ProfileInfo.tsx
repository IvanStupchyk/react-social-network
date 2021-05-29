import React from 'react';
import s from './ProfileInfo.module.scss';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoType = {
    profile: null | ProfileType
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profile_information_container}>
            <div className={s.ava_container}>
                <img alt={'user avatar'} src={props.profile.photos.small} />
            </div>

            <div>
                <ProfileStatus />
                <p className={s.user_name}>{props.profile.fullName}</p>
                <p className={s.user_information}>Data of Birth: 7 october</p>
                <p className={s.user_information}>City: Brest</p>
                <p className={s.user_information}>{props.profile.lookingForAJob ? 'Looking for a job' : 'Don\'t looking for a job'}</p>
                <p className={s.user_information}>Education: GGTU'15</p>
                <p className={s.user_information}>Web Site: {props.profile.contacts.facebook}</p>
            </div>
        </div>
    )
}
