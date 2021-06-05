import React from "react";
import s from './MyPosts.module.scss';
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {addPostFormType, AddPostReduxForm} from "./AddPostForm";

export const MyPosts = (props: MyPostsType) => {
    const postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

    const addPostMessage = (value: addPostFormType) => {
        props.addPost(value.postMessage)
    }

    return (
        <div className={s.posts_container}>
            <h3 className={s.title_posts}>My posts</h3>

            <AddPostReduxForm onSubmit={addPostMessage}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

