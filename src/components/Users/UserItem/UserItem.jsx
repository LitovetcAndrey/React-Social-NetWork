import React from "react";
import s from "./UserItem.module.css"
import userPhoto from "../../../assets/images/user.png"
import {NavLink} from 'react-router-dom';
import * as axios from "axios";

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
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": `c233b2ab-c911-4c2a-9ca2-f04cdde337db`
                                        }

                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unFollow(props.id)
                                        }
                                    });

                            }}> UnFollow </button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, null,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": `c233b2ab-c911-4c2a-9ca2-f04cdde337db`
                                        }

                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
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

