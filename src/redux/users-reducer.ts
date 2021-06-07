import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppThunkType} from "./redux-store";

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
    followingInProgress: Array<number>
}

export type UserActionsTypes = followACActionType | unFollowACActionType | setUsersACActionType |
    setTotalUsersCountACActionType | changeCurrentPageACActionType | setIsFetchingType | toggleIsFollowingProgressType

let initialState: UsersPageType = {
    items: [],
    pageSize: 5,
    currentPage: 1,
    totalCount: 0,
    isFetching: true,
    followingInProgress: []
}

export const UsersReducer = (state: UsersPageType = initialState, action: UserActionsTypes): UsersPageType => {
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

export type followACActionType = ReturnType<typeof followUser>
export const followUser = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export type unFollowACActionType = ReturnType<typeof unFollowUser>
export const unFollowUser = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export type setUsersACActionType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export type setTotalUsersCountACActionType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalCount
    } as const
}

export type changeCurrentPageACActionType = ReturnType<typeof changeCurrentPage>
export const changeCurrentPage = (currentPage: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        currentPage
    } as const
}

export type setIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}

export type toggleIsFollowingProgressType = ReturnType<typeof toggleIsFollowingProgress>
export const toggleIsFollowingProgress = (isFollowing: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFollowing,
        userId
    } as const
}

export const getUsers = (currentPage: number, pageSize: number): AppThunkType => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow = (userId: number): AppThunkType => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))

        usersAPI.followUser(userId)
            .then(data => {
                !data.resultCode && dispatch(followUser(userId))

                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

export const unFollow = (userId: number): AppThunkType => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))

        usersAPI.unFollowUser(userId)
            .then(data => {
                !data.resultCode && dispatch(unFollowUser(userId))

                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}
