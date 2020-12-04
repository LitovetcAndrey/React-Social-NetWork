import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "./../Common/Preloader/Preloader"
import {usersAPI} from "./../../api/api"

import {
    addUsers,
    follow,
    setUsers,
    unFollow,
    setCurrentPage,
    toggleIsFetching,
    setUsersTotalCount
} from "../../redux/users-reduser";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });
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
                //callback
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
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
        isFetching: state.usersPage.isFetching
    }
};


export default connect(mapStateToProps,
    {follow, unFollow, setUsers, addUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching}
)(UsersContainer);

