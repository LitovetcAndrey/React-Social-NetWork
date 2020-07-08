import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


export const person = {
    title: "Dima",
    age: 15
}

const MyPosts = () => {
    let posts=[
        {id:1, message:"Hello !",likesCount:3},
        {id:2, message:"Hi my friend !!!",likesCount:4},
        {id:3, message:"Hi, it's my first post!!!",likesCount:8}
    ] ;

    let postsElements=posts.map(p=> <Post messasge={p.message} likesCount={p.likesCount}  />);

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
            {postsElements}
        </div>
    );
}
export default MyPosts