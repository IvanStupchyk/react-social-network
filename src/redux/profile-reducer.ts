import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

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
    profile: null | ProfileType
    status: string
}

type ActionsTypes = AddPostActionType
    | setUserProfileType
    | setUserStatusType

export let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
        {id: 3, message: 'It\'s my second post', likesCount: 1},
        {id: 4, message: 'It\'s my third post', likesCount: 3}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-USER-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPost>
export const addPost = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage
    } as const
}


export type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export type setUserStatusType = ReturnType<typeof setUserStatus>
export const setUserStatus = (status: string) => {
    return {
        type: 'SET-USER-STATUS',
        status
    } as const
}

export const getProfileUser = (userId: string) => (dispatch: Dispatch<ActionsTypes>) => {
        profileAPI.getProfileUser(userId)
            .then(response => dispatch(setUserProfile(response.data)))
}

export const getStatusUser = (userId: string) => (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.getUserStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
}

export const updateStatusUser = (status: string) => (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.updateUserStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}
