import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";
import {UsersClass} from "./UsersClass";

type MapStatePropsType = {
    items: Array<UserType>
}

type mapDispatchToPropsType = {
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersType = MapStatePropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        items: state.usersPage.items
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        followUser: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollowUser: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

//Array<UserType>

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersClass)