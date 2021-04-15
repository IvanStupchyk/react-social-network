import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostAC, postChangeAC} from "../../../redux/profile-reducer";


type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: MyPostsType) {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(postChangeAC(e.currentTarget.value))
    }

    return (
        <div className={s.posts_container}>
            <h3 className={s.title_posts}>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} className={s.input_news}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;