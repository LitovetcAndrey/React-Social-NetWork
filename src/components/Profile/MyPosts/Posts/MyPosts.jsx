import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


export const person = {
    title: "Dima",
    age: 15
}

const MyPosts = () => {
    return (
        <div className={s.wrapper}>My Post
            <div>New post
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="2"></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
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