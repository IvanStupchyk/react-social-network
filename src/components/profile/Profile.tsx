import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wallpaper from "./Wallpaper/Wallpaper";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

export type PropsPostsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

function Profile(props: PropsPostsType) {
    return (
        <div>
            <Wallpaper/>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;