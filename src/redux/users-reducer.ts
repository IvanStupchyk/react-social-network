import {ActionsTypes} from "./store";

export type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type UsersPageType = {
    users: Array<UserType>
}

let initialState: UsersPageType = {
    users: [
        // {id: 1, photoUrl: 'https://stuki-druki.com/biofoto2/ivan-ivanovich-ipatko-01.jpg', followed: false, fullName: 'Ivan', status: 'I\'m a boss', location: {city: 'Brest', country: 'Belarus'}},
        // {id: 2, photoUrl: 'https://stuki-druki.com/biofoto2/ivan-ivanovich-ipatko-01.jpg', followed: true, fullName: 'Dima', status: 'I\'m a boss too', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 3, photoUrl: 'https://stuki-druki.com/biofoto2/ivan-ivanovich-ipatko-01.jpg', followed: false, fullName: 'Ira', status: 'I\'m a boss too', location: {city: 'Kiev', country: 'Ukraine'}}
    ]
}

export const UsersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
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