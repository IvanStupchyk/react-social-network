import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.posts_container}>
            <p className={s.title_posts}>My posts</p>
            <div>
                <input placeholder={'Your news'} className={s.input_news}/>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount={3}/>
                <Post message="It's my first post" likesCount={12}/>
                <Post message="It's my second post" likesCount={1}/>
                <Post message="It's my third post" likesCount={5}/>
            </div>
        </div>
    )
}

export default MyPosts;