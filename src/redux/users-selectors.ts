import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./users-reducer";

const getUsers = (state: AppStateType) => {
    return state.usersPage.items
}

export const getUsersSuper = createSelector(getUsers, (items: Array<UserType>) => {
    return items
})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}

export const getStartPage = (state: AppStateType) => {
    return state.usersPage.startPage
}

export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}