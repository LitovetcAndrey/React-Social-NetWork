import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "./../Common/Preloader/Preloader"

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
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

