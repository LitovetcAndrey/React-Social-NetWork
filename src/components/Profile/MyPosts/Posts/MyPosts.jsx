import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

<<<<<<< HEAD
export const person = {
    title: "Dima",
=======
const boy = {
    name: "Dima",
>>>>>>> dc5d1c5c398cdd1a88ad6664e4fc38aa4142d384
    age: 15
}

const MyPosts = () => {
    return (
        <div>My Post
            <div>New post
                <div>
                    <textarea name="" id="" cols="50" rows="2"></textarea>
                    <button>Add post</button>
                </div>
            </div>
<<<<<<< HEAD
            <Post messasge="Hi my friend !!!" likesCount="5" data={person}/>
=======
            <Post messasge="Hi my friend !!!" likesCount="5"/>
>>>>>>> dc5d1c5c398cdd1a88ad6664e4fc38aa4142d384
            <Post messasge="Hi, it's my first post!!!" likesCount="8"/>
            <Post/>
        </div>
    );
}
export default MyPosts