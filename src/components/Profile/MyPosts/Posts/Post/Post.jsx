import React from "react";
import s from "./Post.module.css"
<<<<<<< HEAD
import {person} from "../MyPosts";

const Post = (props) => {
    console.log("Props", props);
    console.log("Props name", props.data);
=======

const Post = (props) => {
    console.log("Props", props);
    console.log("Props name", props.obj);

>>>>>>> dc5d1c5c398cdd1a88ad6664e4fc38aa4142d384
    return (
        <div>
            <div className={s.item}>
                <img src="https://s12.stc.all.kpcdn.net/share/i/12/10896475/inx960x640.jpg" alt=""/>
                <div className="wrapper">
                    <div>----</div>
                    <div>{props.messasge}</div>
<<<<<<< HEAD
=======

>>>>>>> dc5d1c5c398cdd1a88ad6664e4fc38aa4142d384
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
<<<<<<< HEAD
                <div>
                    {person.title}
                </div>
            </div>
        </div>
=======
            </div>
        </div>

>>>>>>> dc5d1c5c398cdd1a88ad6664e4fc38aa4142d384
    );
}
export default Post