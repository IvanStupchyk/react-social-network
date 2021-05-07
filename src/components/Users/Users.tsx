import React from "react";
import s from "./users.module.scss";
import userPhoto from "../../images/userPhoto.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    items: Array<UserType>
    onPageChanged: (pageNumber: number) => void
    unFollowUser: (userID: number) => void
    followUser: (userID: number) => void
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
                    pages.map(p => <span
                        onClick={() => props.onPageChanged(p)}
                        className={`${props.currentPage === p && s.selectedPage}`}>
                            {p}</span>)
                }
            </div>
            {
                props.items.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={userPhoto} className={s.userPhoto}/>
                            </NavLink>
                            {/*u.photos.small != null ? u.photos.small : userPhoto*/}
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unFollowUser(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    props.followUser(u.id)
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