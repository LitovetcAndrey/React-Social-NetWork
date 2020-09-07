import React from "react";
import s from "./UserItem.module.css"

const UserItem = (props) => {
     return (
        <div className={s.container}>
            <div className={s.photo}>
                <img src={props.photo} alt=""/>
                <div className={s.button}>
                    {props.followed ? <button
                            onClick={() => {
                             props.unfollow(props.id)
                            }}> UnFollow </button>
                        : <button  onClick={() => {
                            props.follow(props.id)
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
                        <div> {props.location.city}</div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default UserItem;