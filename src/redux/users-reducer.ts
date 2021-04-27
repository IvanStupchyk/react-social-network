// export type LocationType = {
//     city: string
//     country: string
// }

// export type UserType = {
//     id: number
//     photoUrl: string
//     followed: boolean
//     fullName: string
//     status: string
//     location: LocationType
// }

type PhotosType = {
    small: null
    large: null
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: PhotosType
    status: null
    followed: boolean
}

export type UsersPageType = {
    items: Array<UserType>
}

// export type UsersPageType = {
//     users: Array<UserType>
// }

type ActionsTypes = followACActionType | unFollowACActionType | setUsersACActionType

let initialState: UsersPageType = {
    items: []
}

export const UsersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {...state, items: [...state.items, ...action.users]}
        default:
            return state
    }
}

export type followACActionType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export type unFollowACActionType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export type setUsersACActionType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}