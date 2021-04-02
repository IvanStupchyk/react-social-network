const posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 3},
    {id: 2, message: 'It\'s my first post', likesCount: 12},
    {id: 3, message: 'It\'s my second post', likesCount: 1},
    {id: 4, message: 'It\'s my third post', likesCount: 3}
]

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const dialogs = [
    {id: "1", name: "Vania"},
    {id: "2", name: "Andrey"},
    {id: "3", name: "Sveta"},
    {id: "4", name: "Sasha"},
    {id: "5", name: "Victor"},
    {id: "6", name: "Valera"}
]

export type dialogsPropsType = {
    id: string
    name: string
}

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
]

export type messagesPropsType = {
    id: number
    message: string
}
