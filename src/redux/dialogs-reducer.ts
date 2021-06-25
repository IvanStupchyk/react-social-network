export let initialState: DialogsPageType = {
    dialogs: [
        {id: '1', name: 'Vania'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Victor'},
        {id: '6', name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'DIALOGS/ADD-MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.message
            }
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

//actionC
export const addMessage = (message: string) => {
    return {
        type: 'DIALOGS/ADD-MESSAGE',
        message
    } as const
}

//types
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
}
export type DialogsActionsTypes = addMessageActionType
export type addMessageActionType = ReturnType<typeof addMessage>

