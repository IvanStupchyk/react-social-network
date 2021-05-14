import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    changeCurrentPage, followUser,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollowUser,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component<UsersType, any> {
    componentDidMount(): void {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render(): React.ReactNode {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                items={this.props.items}
                onPageChanged={this.onPageChanged}
                unFollowUser={this.props.unFollowUser}
                followUser={this.props.followUser}
            />}
        </>;
    }
}

type MapStatePropsType = {
    items: Array<UserType>
    pageSize: number
    currentPage: number
    totalCount: number
    isFetching: boolean
}

type mapDispatchToPropsType = {
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalCount: number) => void
    changeCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersType = MapStatePropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         followUser: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollowUser: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         changeCurrentPage: (currentPage: number) => {
//             dispatch(changeCurrentPageAC(currentPage))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }


export const UsersContainer = connect(mapStateToProps, {
    followUser,
    unFollowUser,
    setUsers,
    setTotalUsersCount,
    changeCurrentPage,
    toggleIsFetching
})(UsersAPIComponent)