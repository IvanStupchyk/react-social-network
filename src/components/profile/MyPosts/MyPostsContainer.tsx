import {addPost, PostType, ProfilePhotosType, ProfileType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    posts: Array<PostType>
    profile: ProfileType | null
}

type mapDispatchToPropsType = {
    addPost: (postMessage: string) => void,
}

export type MyPostsType = MapStatePropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost}) (MyPosts)
