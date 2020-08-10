import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post id={p.id} messasge={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();// react создай ссылку

    let addPost = () => {
        props.dispatch({type: `ADD-POST`});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;

        let action = {type: `UPDATE-NEW-POST-CHANGE`, newText: text};
        props.dispatch(action);
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
                        <button onClick={addPost}>Add post
                        </button>
                    </div>
                </div>
            </div>
            {postsElements}

        </div>
    );
}
export default MyPosts