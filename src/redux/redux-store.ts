import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersReducer} from "./users-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: UsersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


// @ts-ignore
window.store = store

