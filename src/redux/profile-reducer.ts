import {ActionsTypes, PostType, ProfilePageType} from "./store";

let initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
        {id: 3, message: 'It\'s my second post', likesCount: 1},
        {id: 4, message: 'It\'s my third post', likesCount: 3}
    ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
        switch (action.type) {
            case 'ADD-POST':
                const newPost: PostType = {
                    id: new Date().getTime(),
                    message: state.newPostText,
                    likesCount: 0
                }
                state.posts.push(newPost)
                state.newPostText = ''
                return state
            case 'UPDATE-POST-TEXT':
                state.newPostText = action.newText
                return state
            default:
                return state
        }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export type OnPostChangeActionType = ReturnType<typeof postChangeAC>
export const postChangeAC = (newText: string) => {
    return {
        type: 'UPDATE-POST-TEXT',
        newText: newText
    } as const
}
