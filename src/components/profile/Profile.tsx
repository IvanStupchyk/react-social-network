import React from "react";
import {Wallpaper} from "./Wallpaper/Wallpaper";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <div>
            <Wallpaper/>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}