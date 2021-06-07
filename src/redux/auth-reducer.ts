import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type AuthType = {
    resultCode: number
    messages: []
    id: null | number
    email: null | string
    login: null | string
    isFetching: boolean
    isAuth: boolean
}

type ActionsTypes = setUserDataType

let initialState: AuthType = {
    resultCode: 0,
    messages: [],
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

export const AuthReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {id, email, login, isAuth}
    } as const
}

export const getAuthUser = () => (dispatch: Dispatch) => {
    authAPI.getAuthUser()
        .then(data => {
            if (!data.resultCode) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUser())
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}
