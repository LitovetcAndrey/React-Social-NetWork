import React from "react";
import UserItem from "./UserItem/UserItem";

let users = [{
    id: 1,
    fullName: `Dima`,
    followed: false,
    status: `I am a boss`,
    photo: "http://www.smileexpo.ru/public/upload/news/tn_10_faktov_ob_eynshteyne_kotorih_vi_ne_znali_14458667137751_image.jpg",
    location: {
        city: "Kiev",
        country: "Ukraine",
    }
},
    {
        id: 2,
        fullName: "Pety",
        followed: true,
        status: `I am a engineer`,
        photo: "https://kpfu.ru/portal/docs/F481714198/20160208_learned_cat_blog_Einstein.jpg",
        location: {
            city: "Dnipro",
            country: "Belarus",
        }
    }];

let Users = (props) => {
 if (props.users.length===0)
     props.setUsers(users);
   // props.users.length === 0 ? props.setUsers(users):;

    let userElements = props.users.map(d =>
        <UserItem
            key={d.id}
            id={d.id}
            fullName={d.fullName}
            photo={d.photo}
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
            {userElements}
        </div>
    )
}

export default Users;