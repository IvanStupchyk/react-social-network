import React from "react";
import {addPost, PostType, updateNewPostText} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    newPostText: string,
    posts: Array<PostType>
}

type mapDispatchToPropsType = {
    addPost: () => void,
    updateNewPostText: (text: string) => void
}

export type MyPostsType = MapStatePropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText}) (MyPosts)
