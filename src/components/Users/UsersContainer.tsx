import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    changeCurrentPage, follow, getUsers, unFollow,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component<UsersType, any> {
    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

        this.props.changeCurrentPage(pageNumber)
    }

    render(): React.ReactNode {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                items={this.props.items}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
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
    followingInProgress: Array<number>
}

type mapDispatchToPropsType = {
    changeCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export type UsersType = MapStatePropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    changeCurrentPage,
    getUsers,
    follow,
    unFollow,
})(UsersAPIComponent)