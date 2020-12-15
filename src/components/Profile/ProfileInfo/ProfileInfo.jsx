import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "./../../Common/Preloader/Preloader"
import userPhoto from "../../../assets/images/user.png"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else
        return (
            <div>
                <div>
                    <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/>
                </div>
                <div className={s.descriptionUser}>
                    <div>
                        <img className={s.avatar}
                             src={props.profile.photos.large != null ?
                                 (props.profile.photos.small != null ?
                                     props.profile.photos.small :
                                     props.profile.photos.large) : userPhoto}
                             alt=""/>
                    </div>
                    <div>
                        <div><b>About me:</b> {props.profile.aboutMe}</div>
                        <div><b>facebook:</b> {props.profile.contacts.facebook}</div>
                        <div><b>website:</b> {props.profile.contacts.website}</div>
                        <div><b>vk</b>: {props.profile.contacts.vk}</div>
                        <div><b>fullName:</b> {props.profile.fullName}</div>
                    </div>
                </div>
            </div>
        );
}
export default ProfileInfo;

