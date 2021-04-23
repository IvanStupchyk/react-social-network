import React, {ChangeEvent} from "react";
import s from './MyPosts.module.scss';
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsType) => {
    const postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

    const onAddPost = () => props.addPost()

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.updateNewPostText(e.currentTarget.value)

    return (
        <div className={s.posts_container}>
            <h3 className={s.title_posts}>My posts</h3>

            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} className={s.input_news}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
