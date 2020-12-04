import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"

let Users = (props) => {

    let userElements = props.users.map(d =>
        <UserItem
            key={d.id}
            id={d.id}
            fullName={d.name}
            photo={d.photos.small}
            status={d.status}
            location={d.location}
            followed={d.followed}

            // for callback
            follow={props.follow}
            unFollow={props.unFollow}
            followingInProgress={props.followingInProgress}

            //state
            togleFollowingProgress={props.togleFollowingProgress}

        />);

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div>
                {
                    pages.map(p => <button key={p}
                        className={props.currentPage === p ? s.selectedPage:null}
                        onClick={e => props.onPageChanged(p)}>{p}</button>)
                }
            </div>
            <div>
                {userElements}
            </div>
        </div>
    )
}


export default Users;