import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))


// @ts-ignore
window.store = store

