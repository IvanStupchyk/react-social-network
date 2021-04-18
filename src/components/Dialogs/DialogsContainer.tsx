import React from 'react';
import {addMessageAC, messageChangeAC} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import {Dialogs} from "./Dialogs";

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state = store.getState().dialogsPage

                    const addMessage = () => store.dispatch(addMessageAC())

                    const onMessageChange = (value: string) => store.dispatch(messageChangeAC(value))

                    return <Dialogs
                        addMessage={addMessage}
                        updateNewMessageBody={onMessageChange}
                        dialogsPage={state}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}
