import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";

const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
})

const store = createStore(reducers)

export default store
