import React from "react";
import UserItem from "./UserItem/UserItem";
import * as axios from "axios";
import s from "./Users.module.css"

class UsersClass extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);

        });
    }

    render() {
        //  debugger
        let userElements = this.props.users.map(d =>
            <UserItem
                key={d.id}
                id={d.id}
                fullName={d.name}
                photo={d.photos.small}
                status={d.status}
                location={d.location}
                followed={d.followed}
                // for callback
                follow={this.props.follow}
                unfollow={this.props.unFollow}
            />);

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return (
            <div>
                <div>
                    {
                        pages.map(p => <button
                            className={this.props.currentPage === p ? s.selectedPage : ""}
                            onClick={e => this.onPageChanged(p)}>{p}</button>)
                    }
                </div>
                <div>
                    {userElements}
                </div>
            </div>
        )
    }
}

export default UsersClass;