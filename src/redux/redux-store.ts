import {applyMiddleware, combineReducers, createStore} from "redux";
import {DialogsActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UserActionsTypes, UsersReducer} from "./users-reducer";
import {AuthActionsTypes, AuthReducer} from "./auth-reducer";
import thunk, {ThunkAction} from 'redux-thunk';
import {FormAction, reducer as formReducer} from 'redux-form'
import {AppActionsTypes, AppReducer} from "./app-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

type AppActionsType = AuthActionsTypes
    | DialogsActionsTypes
    | ProfileActionsTypes
    | UserActionsTypes
    | FormAction
    | AppActionsTypes

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    AppActionsType>

export const store = createStore(rootReducer, applyMiddleware(thunk))


// @ts-ignore
window.store = store

