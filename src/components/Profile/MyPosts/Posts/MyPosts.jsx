import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


export const person = {
    title: "Dima",
    age: 15
}

const MyPosts = () => {
    let postsData=[
        {id:1, message:"Hello !",},
        {id:1, message:"Hi my friend !!!"},
        {id:1, message:"Hi, it's my first post!!!"}
    ]
    let likesCount=[
        {id:1,like:5},
        {id:2,like:4},
        {id:3,like:8},

    ]
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
            <Post messasge={postsData[0].message} likesCount={likesCount[0].like} />
            <Post messasge={postsData[1].message} likesCount={likesCount[1].like}/>
            <Post messasge={postsData[2].message} likesCount={likesCount[2].like}/>
            <Post/>
        </div>
    );
}
export default MyPosts