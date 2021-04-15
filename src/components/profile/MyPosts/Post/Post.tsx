import React from "react";
import s from './Post.module.css';

type propsType = {
    message: string
    likesCount: number
}

function Post(props: propsType) {
    return (
        <div className={s.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mr._Bean_2011.jpg/280px-Mr._Bean_2011.jpg"></img>
            {props.message}
            <p>Like {props.likesCount}</p>
        </div>
    )
}

export default Post;