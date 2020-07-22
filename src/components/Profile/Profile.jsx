import React from "react";
import MyPosts from "./MyPosts/Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.stateProfilePage.posts}
                addPost={props.addPost}
                newPostText={props.stateProfilePage.newPostText}
                updateNewPostChange={props.updateNewPostChange}
            />
        </div>);
}
export default Profile