import React from "react";
import MyPosts from "./MyPosts/Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.stateProfilePage.posts}
                newPostText={props.stateProfilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>);
}
export default Profile