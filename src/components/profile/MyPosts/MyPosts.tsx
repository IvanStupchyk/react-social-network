import React from "react";
import s from './MyPosts.module.scss';
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {addPostFormType, AddPostReduxForm} from "./AddPostForm";

export const MyPosts = (props: MyPostsType) => {
    const postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}
                                                     profile={props.profile}/>)

    const addPostMessage = (value: addPostFormType) => {
        props.addPost(value.postMessage)
    }

    return (
        <div className={s.postsContainer}>
            <AddPostReduxForm onSubmit={addPostMessage}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

