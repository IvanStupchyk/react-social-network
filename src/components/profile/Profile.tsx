import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wallpaper from "./Wallpaper/Wallpaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile() {
    return (
        <div>
            <Wallpaper/>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;