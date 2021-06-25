import React from "react";
import s from "./Paginator.module.scss";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export let Paginator = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.numbersPages}>
            {
                pages.map((p, i) => <span key={i} onClick={() => props.onPageChanged(p)}
                                          className={`${props.currentPage === p && s.selectedPage}`}>{p}</span>)
            }
        </div>
    )
}