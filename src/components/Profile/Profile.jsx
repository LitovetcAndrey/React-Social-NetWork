import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/Posts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/>
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
            <MyPosts/>
        </div>);
}
export default Profile