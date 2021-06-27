import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "./redux-store";
import {Dispatch} from "redux";

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}

export const AuthReducer = (state: AuthType = initialState, action: AuthActionsTypes): AuthType => {
    switch (action.type) {
        case "AUTH/SET_USER_DATA":
            return {...state, ...action.payload}
        case "AUTH/GET_CAPTCHA_URL":
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
export const getCaptchaUrlSuccess = (captchaUrl: string | null) => {
    return {
        type: 'AUTH/GET_CAPTCHA_URL',
        payload: {captchaUrl}
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
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunkType => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUser())
        dispatch(getCaptchaUrlSuccess(null))
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
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
export const getCaptchaUrl = (): AppThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

//types
export type AuthType = {
    id: null | number
    email: null | string
    login: null | string
    isFetching: boolean
    isAuth: boolean
    captchaUrl: null | string
}
export type AuthActionsTypes = ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrlSuccess>
