import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "./redux-store";
import {getAuthUser} from "./auth-reducer";

export type AppInitialStateType = {
    initialized: boolean
}

export type AppActionsTypes = setInitializedDataType

let initialState: AppInitialStateType = {
    initialized: false
}

export const AppReducer = (state: AppInitialStateType = initialState, action: AppActionsTypes): AppInitialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED_DATA":
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export type setInitializedDataType = ReturnType<typeof setInitializedData>
export const setInitializedData = () => {
    return {
        type: 'SET_INITIALIZED_DATA'
    } as const
}

export const initializeApp = (): AppThunkType => (dispatch) => {
    let promise = dispatch(getAuthUser())

    promise.then(() => {
        dispatch(setInitializedData())
    })
}


