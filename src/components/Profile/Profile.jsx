import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    // let posts = [
    //     {id: 1, message: "Hello !", likesCount: 3},
    //     {id: 2, message: "Hi my friend !!!", likesCount: 4},
    //     {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
    //     {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
    //     {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
    //     {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
    //     {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
    //     {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
    //     {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
    //     {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
    // ];

    return (
        <div>
            <ProfileInfo />
            <MyPosts data={props.posts}/>
        </div>);
}
export default Profile