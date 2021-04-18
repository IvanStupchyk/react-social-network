import React from "react";
import {addPostAC, postChangeAC} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state = store.getState()

                    const addPost = () => store.dispatch(addPostAC())

                    const onPostChange = (text: string) => store.dispatch(postChangeAC(text))

                    return <MyPosts
                        newPostText={state.profilePage.newPostText}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        updateNewPostText={onPostChange}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}
