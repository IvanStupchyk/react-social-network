import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";
import {Redirect} from "react-router-dom";


export const Profile = (props: ProfilePropsType) => {
    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatusUser={props.updateStatusUser}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />

        </div>
    )
}