import {addMessage, dialogsReducer, initialState} from "./dialogs-reducer";

let inState = initialState
let countMessagesInState = inState.messages.length


test('count of messages should be increased', () => {
    let updateDialogsReducer = dialogsReducer(inState, addMessage('new message'))

    expect(updateDialogsReducer.messages.length).toBe(countMessagesInState + 1)
})

test('new message text should be added', () => {
    let updateDialogsReducer = dialogsReducer(inState, addMessage('new message'))

    expect(updateDialogsReducer.messages[updateDialogsReducer.messages.length - 1].message).toBe('new message')
})