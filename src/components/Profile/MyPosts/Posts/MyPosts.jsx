import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post id={p.id} messasge={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();// react создай ссылку

    let onAddPost = () => {
        props.addPost();

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };

    return (
        <div className={s.wrapper}>My Post
            <div>New post
                <div>
                    <div>
                        <textarea
                            /* ссылка для textarea*/
                            ref={newPostElement}
                            onChange={onPostChange}
                            value={props.newPostText}
                            cols="50" rows="5"
                        />
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post
                        </button>
                    </div>
                </div>
            </div>
            {postsElements}

        </div>
    );
}
export default MyPosts