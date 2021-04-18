import {ActionsTypes, DialogsPageType, MessageType} from "./store";

let initialState = {
    dialogs: [
        {id: '1', name: 'Vania'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Victor'},
        {id: '6', name: 'Valera'}
    ],
    newMessage: "",
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessage
            }

            state.messages.push(newMessage)
            state.newMessage = ''
            return state
        case 'UPDATE-MESSAGE-TEXT':
            state.newMessage = action.newText
            return state
        default:
            return state
    }
}

export type addMessageActionType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export type messageChangeActionType = ReturnType<typeof messageChangeAC>
export const messageChangeAC = (newText: string) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        newText: newText
    } as const
}
