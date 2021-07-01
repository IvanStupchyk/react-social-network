import React from "react";
import s from "./User.module.scss";
import userPhoto from "../../images/userPhoto.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export let User = ({user, followingInProgress, follow, unFollow}: UserPropsType) => {
    return (
        <div className={s.userContainer}>
            <div className={s.userPhoto}>
                <NavLink to={`/profile/${user.id}`}>
                    <img alt={'user avatar'} src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                </NavLink>
            </div>
            <div className={s.rightUserInfoBlock}>
                <div className={s.userName}>{user.name}</div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unFollow(user.id)
                                  }} className={s.followUnfollowBtn}>unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }} className={s.followUnfollowBtn}>follow</button>}
                </div>
            </div>

        </div>
    )
}