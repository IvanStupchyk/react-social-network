import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";
import Wallpaper from "./Wallpaper/Wallpaper";

function Profile() {
    return (
        <div>
            <Wallpaper />
            <UserInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;