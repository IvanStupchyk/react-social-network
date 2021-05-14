import React from "react";
import s from "./users.module.scss";
import userPhoto from "../../images/userPhoto.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    items: Array<UserType>
    onPageChanged: (pageNumber: number) => void
    unFollowUser: (userID: number) => void
    followUser: (userID: number) => void
    toggleIsFollowingProgress: (isFollowing: boolean, userId: number) => void
    followingInProgress: Array<number>
}

export let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.numbersPages}>
                {
                    pages.map((p, i) => <span key={i}
                        onClick={() => props.onPageChanged(p)}
                        className={`${props.currentPage === p && s.selectedPage}`}>
                            {p}</span>)
                }
            </div>
            {
                props.items.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img alt={'user avatar'} src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={s.userPhoto}/>

                                {/*<img src={u.photos.small || userPhoto} className={s.userPhoto}/>*/}
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)

                                    usersAPI.unFollowUser(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unFollowUser(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false, u.id)
                                        })

                                }}>unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)

                                    usersAPI.followUser(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.followUser(u.id)
                                            }

                                            props.toggleIsFollowingProgress(false, u.id)
                                        })
                                }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/*<div>{u.location.country}</div>*/}
                            {/*<div>{u.location.city}</div>*/}
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}