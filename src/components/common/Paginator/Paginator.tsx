import React, {useState} from "react";
import s from "./Paginator.module.scss";
import Pagination from "react-js-pagination";
import {Users} from "../../Users/Users";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    portionSize?: number
    onPageChanged: (pageNumber: number) => void
    changeStartPage: (pageNumber: number) => void
    startPage: number
}

export let Paginator = ({totalCount, pageSize, currentPage, portionSize = 10, onPageChanged, changeStartPage, startPage}: UsersPropsType) => {
    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(startPage)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}
            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <span key={p} onClick={() => {
                        onPageChanged(p)
                        changeStartPage(portionNumber)
                    }}
                                    className={`${currentPage === p && s.selectedPage}`}>{p}</span>)
            }
            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
        </div>
    )
}