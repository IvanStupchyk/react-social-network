import React from "react";
import s from './Post.module.scss'
import userPhoto from "../../../../images/userPhoto.png";
import {ProfileType} from "../../../../redux/profile-reducer";
import heart from '../../../../images/icons/heart.svg'

export type propsType = {
    message: string
    likesCount: number
    profile: ProfileType | null
}

export const Post = (props: propsType) => {
    return (
        <div className={s.post}>
            <div className={s.topBlockPost}>
                <div className={s.avatarPostContainer}>
                    <img alt={'user avatar'}
                         src={props.profile?.photos.small ? props.profile.photos.small : userPhoto}/>
                </div>
                <p>{props.profile?.fullName}</p>
            </div>
            <p className={s.postMessage}>{props.message}</p>
            <div className={s.likesBlock}>
                <div className={s.likeHeartContainer}>
                    <img alt={'icon likes'} src={heart}/>
                </div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    )
}
