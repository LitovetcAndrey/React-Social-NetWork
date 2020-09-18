import React from "react";
import UserItem from "./UserItem/UserItem";
import * as axios from "axios";

// let users = [{
//     id: 1,
//     fullName: `Dima`,
//     followed: false,
//     status: `I am a boss`,
//     photo: "http://www.smileexpo.ru/public/upload/news/tn_10_faktov_ob_eynshteyne_kotorih_vi_ne_znali_14458667137751_image.jpg",
//     location: {
//         city: "Kiev",
//         country: "Ukraine",
//     }
// },
//     {
//         id: 2,
//         fullName: "Pety",
//         followed: true,
//         status: `I am a engineer`,
//         photo: "https://kpfu.ru/portal/docs/F481714198/20160208_learned_cat_blog_Einstein.jpg",
//         location: {
//             city: "Dnipro",
//             country: "Belarus",
//         }
//     }];

let Users = (props) => {

    let getUsers=()=>{
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });
        }
    }



    // props.setUsers(users);
    // props.users.length === 0 ? props.setUsers(users):;

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
            unfollow={props.unFollow}
            setUsers={props.setUsers}
            addUsers={props.addUsers}
        />);
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            <div>
                {userElements}
            </div>
        </div>

    )
}

export default Users;