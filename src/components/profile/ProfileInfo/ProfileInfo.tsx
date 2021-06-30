import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.scss';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import userPhoto from "../../../images/userPhoto.png";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormReduxForm} from "./ProfileDataForm/ProfileDataForm";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus"
import pencilEdit from '../../../images/icons/pencilEdit.svg'
import checkMark from '../../../images/icons/checkMark.svg'
import uncheckMark from '../../../images/icons/uncheckMark.svg'
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";


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
        <div className={s.profileInformationContainer}>
            <div className={s.mainProfileInfo}>
                <div className={s.leftBlockMainProfileInfo}>
                    <div className={s.avaContainer}>
                        <img alt={'user avatar'} src={profile.photos ? profile.photos.small : userPhoto}/>
                    </div>
                    <div>
                        <div className={s.topBlockMainProfileInfo}>
                            <p className={s.userName}>{profile.fullName}</p>
                            <div className={s.searchJobStatus}>
                                {profile.lookingForAJob
                                    ? <img src={checkMark} alt={'check mark'}/>
                                    : <img src={uncheckMark} alt={'uncheck mark'}/>} Looking for a job
                            </div>
                        </div>
                        <ProfileStatus status={status} updateStatusUser={updateStatusUser}/>
                    </div>
                </div>
                {isOwner &&
                <div>
                    <div className={s.btnEditProfile} onClick={goToEditMode}>
                        <img alt={'edit pencil'} src={pencilEdit}/>
                        <button>edit</button>
                    </div>
                    <div>
                        <input className={s.inputAddUserPhoto} type={'file'} id={'file'}
                               onChange={onMainPhotoSelected}/>
                        <label htmlFor={'file'} className={s.addUserPhoto}>add photo</label>
                    </div>
                </div>
                }

            </div>

            <div className={s.bottomInfoBlock}>
                <div className={s.userContacts}>
                    {editMode
                        ? <ProfileDataFormReduxForm
                            onSubmit={onSubmit}
                            profile={profile}
                            initialValues={profile}
                        />
                        : <ProfileData
                            profile={profile}
                        />
                    }
                </div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}


