import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {OwnPropsType} from "./ProfileContainer";



export const Profile = (props: OwnPropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatusUser={props.updateStatusUser}
            />
            <MyPostsContainer/>
        </div>
    )
}