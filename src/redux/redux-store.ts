import {combineReducers, createStore} from "redux";
import {StoreType} from "./store";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export const store: StoreType = createStore(reducers)

