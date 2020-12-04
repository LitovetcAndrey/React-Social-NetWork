import React from "react";
import s from "./UserItem.module.css"
import userPhoto from "../../../assets/images/user.png"
import {NavLink} from 'react-router-dom';
import * as axios from "axios";
import {usersAPI} from "./../../../api/api"

const UserItem = (props) => {
    //debugger
    return (
        <div className={s.container}>
            <div className={s.photo}>
                <NavLink to={`/profile/` + props.id}>
                    <img src={props.photo != null ? props.photo : userPhoto} alt=""/>
                </NavLink>

                <div className={s.button}>
                    {
                        props.followed ? <button onClick={() => {
                                usersAPI.unFollowUser(props.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unFollow(props.id)
                                    }
                                });
                            }}> UnFollow </button> :
                            <button onClick={() => {
                                usersAPI.followUser(props.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.follow(props.id)
                                    }
                                });
                            }}> Follow </button>}
                </div>
            </div>
            <div className={s.description}>
                <div className={s.container}>
                    <div>
                        <div> {props.fullName}</div>
                        <div> {props.status}</div>
                    </div>
                    <div>
                        {/*<div> {props.location.city}</div>*/}
                    </div>

                </div>
            </div>


        </div>
    )
}
export default UserItem;

