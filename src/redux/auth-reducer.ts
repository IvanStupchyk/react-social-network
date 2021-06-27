import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "./redux-store";
import {Dispatch} from "redux";

let initialState: AuthType = {
    resultCode: 0,
    messages: [],
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

export const AuthReducer = (state: AuthType = initialState, action: AuthActionsTypes): AuthType => {
    switch (action.type) {
        case "AUTH/SET_USER_DATA":
            return {...state, ...action.payload}
        default:
            return state
    }
}

//actionC
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'AUTH/SET_USER_DATA',
        payload: {id, email, login, isAuth}
    } as const
}

//thunkC
export const getAuthUser = (): any => async (dispatch: Dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUser())
    } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = (): AppThunkType => async (dispatch) => {
    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

//types
export type AuthType = {
    resultCode: number
    messages: []
    id: null | number
    email: null | string
    login: null | string
    isFetching: boolean
    isAuth: boolean
}
export type AuthActionsTypes = setUserDataType
export type setUserDataType = ReturnType<typeof setAuthUserData>