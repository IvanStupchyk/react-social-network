import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.scss';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import userPhoto from "../../../images/userPhoto.png";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormReduxForm} from "./ProfileDataForm/ProfileDataForm";

type ProfileInfoType = {
    profile: null | ProfileType
    status: string
    updateStatusUser: (status: string) => void
    isOwner: boolean
    savePhoto: (filePhoto: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

export const ProfileInfo = ({profile, status, updateStatusUser, isOwner, savePhoto, saveProfile}: ProfileInfoType) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }

    const goToEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (profile: ProfileType) => {
        saveProfile(profile).then(
            () => setEditMode(false)
        )
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profile_information_container}>
            <div className={s.ava_container}>
                <img alt={'user avatar'} src={profile.photos ? profile.photos.small : userPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>

            {editMode
                ? <ProfileDataFormReduxForm
                    onSubmit={onSubmit}
                    profile={profile}
                    initialValues={profile}
                />
                : <ProfileData
                    profile={profile}
                    status={status}
                    updateStatusUser={updateStatusUser}
                    isOwner={isOwner}
                    goToEditMode={goToEditMode}
                />
            }
        </div>
    )
}


