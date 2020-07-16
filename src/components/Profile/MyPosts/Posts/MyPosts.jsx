import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
     let postsElements = props.posts.map(p => <Post id={p.id} messasge={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.wrapper}>My Post
            <div>New post
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
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