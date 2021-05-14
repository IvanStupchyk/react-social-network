import React from "react";
import s from './Post.module.scss'

export type propsType = {
    message: string
    likesCount: number
}

export const Post = (props: propsType) => {
    return (
        <div className={s.item}>
            <img alt={'img-post'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mr._Bean_2011.jpg/280px-Mr._Bean_2011.jpg" />
            {props.message}
            <p>Like {props.likesCount}</p>
        </div>
    )
}
