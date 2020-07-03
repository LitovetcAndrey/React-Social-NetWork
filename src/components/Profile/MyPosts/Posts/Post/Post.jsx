import React from "react";
import s from "./MyPosts.module.css"

const MyPosts=()=>{
    return(
        <div >My Post
            <div>New post
              <div>
                  <textarea name="" id="" cols="50" rows="2"></textarea>
                  <button>Add post</button>
              </div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src="https://s12.stc.all.kpcdn.net/share/i/12/10896475/inx960x640.jpg" alt=""/>
                    <div>Post 1</div>
                </div>
                <div>post 2</div>
            </div>
        </div>
    );
}
export default MyPosts