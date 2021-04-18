import {AddPostActionType, OnPostChangeActionType, profileReducer} from "./profile-reducer";
import {addMessageActionType, dialogsReducer, messageChangeActionType} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessage: string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionsTypes = AddPostActionType | OnPostChangeActionType | addMessageActionType | messageChangeActionType

export type StoreType = {
    _state: RootStateType
    _renderEntireThree: (a: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: 'It\'s my first post', likesCount: 12},
                {id: 3, message: 'It\'s my second post', likesCount: 1},
                {id: 4, message: 'It\'s my third post', likesCount: 3}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Vania'},
                {id: '2', name: 'Andrey'},
                {id: '3', name: 'Sveta'},
                {id: '4', name: 'Sasha'},
                {id: '5', name: 'Victor'},
                {id: '6', name: 'Valera'}
            ],
            newMessage: '',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
        sidebar: {}
    },

    _renderEntireThree() {
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._renderEntireThree = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._renderEntireThree(this._state)
    }
}

export default store

