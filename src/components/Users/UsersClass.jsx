import React from "react";
import UserItem from "./UserItem/UserItem";
import * as axios from "axios";

class UsersClass extends React.Component {
    constructor(props) {
        super(props);
       // alert("Worked constructor");
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    // userElements = this.props.users.map(d =>
    //     <UserItem
    //         key={d.id}
    //         id={d.id}
    //         fullName={d.name}
    //         photo={d.photos.small}
    //         status={d.status}
    //         location={d.location}
    //         followed={d.followed}
    //         // for callback
    //         follow={this.props.follow}
    //         unfollow={this.props.unFollow}
    //         setUsers={this.props.setUsers}
    //         addUsers={this.props.addUsers}
    //     />);

    // getUsers = () => {
    //     debugger
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items);
    //         });
    //     }
    // }



    render() {
      //  debugger
        return (
            <div>
                {/*<button onClick={this.getUsers}>Get users</button>*/}
                <div>
                    {/*{this.userElements}   dont work*/}

                    {
                        this.props.users.map(d =>
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
                                setUsers={this.props.setUsers}
                                addUsers={this.props.addUsers}
                            />)
                    }
                </div>
            </div>
        )
    }
}

export default UsersClass;