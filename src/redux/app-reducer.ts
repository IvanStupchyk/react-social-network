import {AppThunkType} from "./redux-store";
import {getAuthUser} from "./auth-reducer";

let initialState: AppInitialStateType = {
    initialized: false
}

export const AppReducer = (state: AppInitialStateType = initialState, action: AppActionsTypes): AppInitialStateType => {
    switch (action.type) {
        case "APP/SET_INITIALIZED_DATA":
            return {...state, initialized: true}
        default:
            return state
    }
}

//actionC
export const setInitializedData = () => {
    return {
        type: 'APP/SET_INITIALIZED_DATA'
    } as const
}

//thunkC
export const initializeApp = (): AppThunkType => (dispatch) => {
    let promise = dispatch(getAuthUser())

    promise.then(() => {
        dispatch(setInitializedData())
    })
}

//types
export type AppInitialStateType = {
    initialized: boolean
}
export type AppActionsTypes = setInitializedDataType
export type setInitializedDataType = ReturnType<typeof setInitializedData>