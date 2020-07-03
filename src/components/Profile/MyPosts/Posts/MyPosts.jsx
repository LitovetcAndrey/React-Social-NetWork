import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


export const person = {
    title: "Dima",
    age: 15
}

const MyPosts = () => {
    return (
        <div>My Post
            <div>New post
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post messasge="Hi my friend !!!" likesCount="5" data={person}/>
            <Post messasge="Hi my friend !!!" likesCount="5"/>
            <Post messasge="Hi, it's my first post!!!" likesCount="8"/>
            <Post/>
        </div>
    );
}
export default MyPosts