import React from "react";
import s from "./Profile.module.css"

const Profile=()=>{
    return(<div className={s.content}>
        <div>
            <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/>
        </div>
        <div className={s.descriptionUser}>
            <div>
                <img className={s.face} src="https://static.bleedingedge.com/uploads/2019/04/mekko-thumbnail.png"
                     alt=""/>
            </div>
            <div>
                <h2>Andrey L</h2>
                <div>Date</div>
                <div>City</div>
                <div>Education</div>
                <div>WebSite</div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dignissimos doloribus
                    facere impedit in itaque magnam magni minima nobis officiis possimus praesentium reprehenderit
                    sapiente sequi tempora ut, veritatis vero.</p>
            </div>
        </div>
        <div >My Post
            <div>New post</div>
            <div className={s.post}>post 1</div>
            <div className={s.post}>post 2</div>
            <div className={s.post}>post 3</div>
        </div>
    </div>);
}
export default Profile