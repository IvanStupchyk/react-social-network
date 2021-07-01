import React from "react";
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import s from "./User.module.scss";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    items: Array<UserType>
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    changeStartPage: (pageNumber: number) => void
    startPage: number
}

export let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.usersContainer}>
                {props.items.map(u => <div key={u.id}>
                    <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow}
                        unFollow={props.unFollow}
                    />
                </div>)}
            </div>
            <Paginator
                totalCount={props.totalCount}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                pageSize={props.pageSize}
                changeStartPage={props.changeStartPage}
                startPage={props.startPage}
            />
        </div>
    )
}