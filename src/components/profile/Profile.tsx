import React from "react";
import {Wallpaper} from "./Wallpaper/Wallpaper";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: null | ProfileType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <Wallpaper/>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}