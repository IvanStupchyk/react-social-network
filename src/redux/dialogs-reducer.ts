export let initialState: DialogsPageType = {
    dialogs: [
        {id: '1', name: 'Andrey Sergeev'},
        {id: '2', name: 'Petya Samysin'},
        {id: '3', name: 'Ira Tolochko'},
        {id: '4', name: 'Sasha Sarychev'},
        {id: '5', name: 'Stepan Klimov'},
        {id: '6', name: 'Anna Starkova'}
    ],
    messages: [
        {id: 1, message: 'Its just testing page for adding messages'},
        {id: 2, message: 'Something interesting'},
        {id: 3, message: 'this is good if you read this'},
        {id: 4, message: 'Hi, bro!'},
        {id: 5, message: 'Add something if you want'}
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

