import {profileAPI} from "../api/api";
import {AppThunkType} from "./redux-store";

export let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
        {id: 3, message: 'It\'s my second post', likesCount: 1},
        {id: 4, message: 'It\'s my third post', likesCount: 3}
    ],
    profile: null,
    status: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'PROFILE/ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case "PROFILE/SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "PROFILE/SET-USER-STATUS":
            return {...state, status: action.status}
        case "PROFILE/DELETE-POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case "PROFILE/SET-USER-AVATAR":
            // return {...state, profile: {...state.profile, photos: {...state.profile?.photos}}}
            return {...state, profile: {...state.profile, photos: {...state.profile?.photos, small: action.image}}}
        default:
            return state
    }
}

//actionC
export const addPost = (postMessage: string) => {
    return {
        type: 'PROFILE/ADD-POST',
        postMessage
    } as const
}
export const deletePost = (postId: number) => {
    return {
        type: 'PROFILE/DELETE-POST',
        postId
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'PROFILE/SET-USER-PROFILE',
        profile
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: 'PROFILE/SET-USER-STATUS',
        status
    } as const
}
export const savePhotoSuccess = (image: string) => {
    return {
        type: 'PROFILE/SET-USER-AVATAR',
        image
    } as const
}

//thunkC
export const getProfileUser = (userId: string): AppThunkType => async (dispatch) => {
    let response = await profileAPI.getProfileUser(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatusUser = (userId: string): AppThunkType => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response.data))
}
export const updateStatusUser = (status: string): AppThunkType => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (image: File): AppThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(image)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos.small))
    }
}

//types
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}
export type ProfilePhotosType = {
    small?: string
    large?: string
}
export type ProfileType = {
    aboutMe?: string
    contacts?: ProfileContactsType
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: number
    photos?: ProfilePhotosType
}
export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}
export type ProfileActionsTypes = AddPostActionType
    | setUserProfileType
    | setUserStatusType
    | deletePostActionType
    | ReturnType<typeof savePhotoSuccess>

export type AddPostActionType = ReturnType<typeof addPost>
export type deletePostActionType = ReturnType<typeof deletePost>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setUserStatusType = ReturnType<typeof setUserStatus>