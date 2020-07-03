import React from "react";
import s from "./MyPosts.module.css"

const MyPosts=()=>{
    return(
        <div >My Post
            <div>New post</div>
            <div className={s.posts}>
                <div className={s.item}>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    );
}
export default MyPosts