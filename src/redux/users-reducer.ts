import {usersAPI} from "../api/api";
import {AppThunkType} from "./redux-store";

let initialState: UsersPageType = {
    items: [],
    pageSize: 5,
    currentPage: 1,
    totalCount: 0,
    isFetching: true,
    startPage: 1,
    followingInProgress: []
}

export const UsersReducer = (state: UsersPageType = initialState, action: UserActionsTypes): UsersPageType => {
    switch (action.type) {
        case "USERS/FOLLOW":
            return {
                ...state,
                items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case "USERS/UNFOLLOW":
            return {
                ...state,
                items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "USERS/SET-USERS":
            return {...state, items: action.users}
        case "USERS/SET-TOTAL-USERS-COUNT":
            return {...state, totalCount: action.totalCount}
        case "USERS/CHANGE-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "CHANGE-START-PAGE":
            return {...state, startPage: action.pageNumber}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

//actionC
export const followUser = (userId: number) => {
    return {
        type: 'USERS/FOLLOW',
        userId
    } as const
}
export const unFollowUser = (userId: number) => {
    return {
        type: 'USERS/UNFOLLOW',
        userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'USERS/SET-USERS',
        users
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'USERS/SET-TOTAL-USERS-COUNT',
        totalCount
    } as const
}
export const changeCurrentPage = (currentPage: number) => {
    return {
        type: 'USERS/CHANGE-CURRENT-PAGE',
        currentPage
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}
export const toggleIsFollowingProgress = (isFollowing: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFollowing,
        userId
    } as const
}
export const changeStartPage = (pageNumber: number) => {
    return {
        type: 'CHANGE-START-PAGE',
        pageNumber
    } as const
}

//thunksC
export const requestUsers = (currentPage: number, pageSize: number): AppThunkType => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(changeCurrentPage(currentPage))

    const response = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.data.items))
    dispatch(setTotalUsersCount(response.data.totalCount))
}
export const follow = (userId: number): AppThunkType => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))

    const response = await usersAPI.followUser(userId)
    !response.data.resultCode && dispatch(followUser(userId))
    dispatch(toggleIsFollowingProgress(false, userId))
}
export const unFollow = (userId: number): AppThunkType => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))

    const response = await usersAPI.unFollowUser(userId)
    !response.data.resultCode && dispatch(unFollowUser(userId))
    dispatch(toggleIsFollowingProgress(false, userId))
}

//types
type PhotosType = {
    small: null | string
    large: null | string
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
    startPage: number
    followingInProgress: Array<number>
}
export type UserActionsTypes = ReturnType<typeof followUser>
    | ReturnType<typeof unFollowUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof changeCurrentPage>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>
    | ReturnType<typeof changeStartPage>
