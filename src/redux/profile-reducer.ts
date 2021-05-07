export type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfileContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}

type ProfilePhotosType = {
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
    newPostText: string
    posts: Array<PostType>
    profile: null | ProfileType
}

type ActionsTypes = AddPostActionType | OnPostChangeActionType | setUserProfileType

export let initialState: ProfilePageType = {
    newPostText: "",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
        {id: 3, message: 'It\'s my second post', likesCount: 1},
        {id: 4, message: 'It\'s my third post', likesCount: 3}
    ],
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case 'UPDATE-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPost>
export const addPost = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export type OnPostChangeActionType = ReturnType<typeof updateNewPostText>
export const updateNewPostText = (newText: string) => {
    return {
        type: 'UPDATE-POST-TEXT',
        newText: newText
    } as const
}

export type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
