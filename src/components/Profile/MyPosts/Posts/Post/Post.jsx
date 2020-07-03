import React from "react";
import s from "./Post.module.css"
import {person} from "../MyPosts";

const Post = (props) => {
    console.log("Props", props);
    console.log("Props name", props.obj);
    return (
        <div>
            <div className={s.item}>
                <img src="https://s12.stc.all.kpcdn.net/share/i/12/10896475/inx960x640.jpg" alt=""/>
                <div className="wrapper">
                    <div>----</div>
                    <div>{props.messasge}</div>
                </div>
            </div>
            <div className={s.decision}>
                <div>
                    Like
                </div>
                {props.likesCount}
                <div>
                    <span> Dislike</span>
                </div>
                <div>
                    {person.title}
                </div>
            </div>
        </div>
    );
}
export default Post