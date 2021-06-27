import {profileAPI} from "../api/api";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";

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
            return state.profile !== null
                ? {...state, profile: {...state.profile, photos: {...state.profile.photos, small: action.image}}}
                : {...state}
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
    const response = await profileAPI.getProfileUser(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatusUser = (userId: string): AppThunkType => async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response.data))
}
export const updateStatusUser = (status: string): AppThunkType => async (dispatch) => {
    const response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
export const savePhoto = (image: File): AppThunkType => async (dispatch) => {
    const response = await profileAPI.savePhoto(image)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos.small))
    }
}
export const saveProfile = (profile: ProfileType): AppThunkType => async (dispatch, getState) => {
    const startUserId = getState().auth.id?.toString()
    const userId = startUserId !== undefined ? startUserId : '1'

    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getProfileUser(userId))
    } else {
        const filedError = response.data.messages[0].split('Contacts->')[1]
        const correctFieldError = filedError.substring(0, filedError.length - 1).toLowerCase()

        dispatch(stopSubmit('edit-profile', {_error: correctFieldError}))
        return Promise.reject(`Incorrect field: ${correctFieldError}`)
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
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type ProfilePhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotosType
}
export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}
export type ProfileActionsTypes = ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>
