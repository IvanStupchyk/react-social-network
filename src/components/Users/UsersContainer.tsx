import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {changeCurrentPage, changeStartPage, follow, requestUsers, unFollow, UserType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize, getStartPage,
    getTotalUsersCount,
    getUsersSuper
} from "../../redux/users-selectors";

class UsersContainer extends React.Component<UsersType, any> {
    componentDidMount(): void {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)

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
                changeStartPage={this.props.changeStartPage}
                startPage={this.props.startPage}
                isAuth={this.props.isAuth}
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
    startPage: number
    isAuth: boolean
}

type mapDispatchToPropsType = {
    changeCurrentPage: (currentPage: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    changeStartPage: (pageNumber: number) => void
}

export type UsersType = MapStatePropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        items: getUsersSuper(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        startPage: getStartPage(state),
        isAuth: getIsAuth(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        changeCurrentPage,
        requestUsers,
        follow,
        unFollow,
        changeStartPage
    })
)
(UsersContainer)