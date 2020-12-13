import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "./../Common/Preloader/Preloader"
import {getUsers, getPagePresent, followUser, unFollowUser, togleFollowingProgress} from "./../../redux/users-reduser"


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getPagePresent(this.props.pageSize, pageNumber);
    }

    render() {
        return <>
            {
                this.props.isFetching ?
                    <Preloader/> : null
            }
            <Users users={this.props.users}
                   totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   togleFollowingProgress={this.props.togleFollowingProgress}

                //callback
                   followingInProgress={this.props.followingInProgress}
                   unFollowUser={this.props.unFollowUser}
                   followUser={this.props.followUser}
                //this metod
                   onPageChanged={this.onPageChanged}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};


export default connect(mapStateToProps, {
    togleFollowingProgress,
    getUsers,
    getPagePresent,
    followUser,
    unFollowUser,
})(UsersContainer);

