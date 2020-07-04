import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./Dialog/DialogItem";

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem id="1" name="Dima"/>
                    <DialogItem id="2" name="Pety"/>
                    <DialogItem id="3" name="Koly"/>
                    <DialogItem id="4" name="Masha"/>
                </div>
                <div className={s.messages}>
                    <Message message="Hello"/>
                    <Message message="How are your React"/>
                    <Message message="Weather id good"/>
                    <Message message="I am working right now"/>
                    <Message message="I have been working for an hour"/>
                    <Message message="I was work"/>
                    <Message message="I was working"/>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;