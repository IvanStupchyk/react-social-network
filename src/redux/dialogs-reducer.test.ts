import {addMessageAC, dialogsReducer, initialState, messageChangeAC} from "./dialogs-reducer";

let inState = initialState

test('dialogs-reducer should update message text', () => {
    let updateDialogsReducer = dialogsReducer(inState, messageChangeAC('This is new text message'))

    expect(updateDialogsReducer.newMessage).toBe('This is new text message')
})

test('dialogs-reducer should add new message text', () => {
    let updateDialogsReducer = dialogsReducer(inState, addMessageAC())
    let countMessagesInState = inState.messages.length

    expect(updateDialogsReducer.messages.length).toBe(countMessagesInState + 1)
})