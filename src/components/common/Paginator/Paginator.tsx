import React, {useState} from "react";
import s from "./Paginator.module.scss";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    portionSize?: number
    onPageChanged: (pageNumber: number) => void
    changeStartPage: (pageNumber: number) => void
    startPage: number
}

export let Paginator = ({totalCount, pageSize, currentPage, portionSize = 5, onPageChanged, changeStartPage, startPage}: UsersPropsType) => {
    const pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(startPage)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginationContainer}>
            <button disabled={portionNumber <= 1} className={s.btnBack}
                    onClick={() => setPortionNumber(portionNumber - 1)}/>
            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <div key={p}
                                   onClick={() => {
                                       onPageChanged(p);
                                       changeStartPage(portionNumber)
                                   }}
                                   className={`${currentPage === p ? s.selectedPage : ''} ${s.numberPage}`}>{p}</div>)
            }
            <button
                disabled={portionCount < portionNumber}
                onClick={() => setPortionNumber(portionNumber + 1)} className={s.btnNext}/>
        </div>
    )
}