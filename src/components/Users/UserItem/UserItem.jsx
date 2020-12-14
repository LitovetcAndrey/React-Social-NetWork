import React from "react";
import s from "./UserItem.module.css"
import userPhoto from "../../../assets/images/user.png"
import {NavLink} from 'react-router-dom';

const UserItem = (props) => {
    return (
        <div className={s.container}>
            <div className={s.photo}>
                <NavLink to={`/profile/` + props.id}>
                    <img src={props.photo != null ? props.photo : userPhoto} alt=""/>
                </NavLink>

                <div className={s.button}>
                    {
                        props.followed ?
                            <button disabled={props.followingInProgress.some(id=>id===props.id)} onClick={() => {
                                props.unFollow(props.id);
                            }}> UnFollow </button> :
                            <button disabled={props.followingInProgress.some(id=>id===props.id)} onClick={() => {
                             props.follow(props.id);
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

