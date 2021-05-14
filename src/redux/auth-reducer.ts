type DataType = {
    id: null | number
    email: null | string
    login: null | string
}

export type AuthType = {
    resultCode: number
    messages: []
    data: DataType
    isFetching: boolean
    isAuth: boolean
}

type ActionsTypes = setUserDataType

let initialState: AuthType = {
    resultCode: 0,
    messages: [],
    data: {
        id: null,
        email: null,
        login: null
    },
    isFetching: false,
    isAuth: false
}

export const AuthReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }

        default:
            return state
    }
}

export type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        data: {id, email, login}
    } as const
}

