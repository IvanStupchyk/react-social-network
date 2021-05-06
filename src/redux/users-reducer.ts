
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
    pageSize: number
    currentPage: number
    totalCount: number
    isFetching: boolean
}

type ActionsTypes = followACActionType | unFollowACActionType | setUsersACActionType | setTotalUsersCountACActionType | changeCurrentPageACActionType | setIsFetchingType

let initialState: UsersPageType = {
    items: [],
    pageSize: 5,
    currentPage: 1,
    totalCount: 0,
    isFetching: true,
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
            return {...state, items: action.users}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalCount: action.totalCount}
        case "CHANGE-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
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

export type setTotalUsersCountACActionType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalCount
    } as const
}

export type changeCurrentPageACActionType = ReturnType<typeof changeCurrentPageAC>
export const changeCurrentPageAC = (currentPage: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        currentPage
    } as const
}

export type setIsFetchingType = ReturnType<typeof setIsFetchingAC>
export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}