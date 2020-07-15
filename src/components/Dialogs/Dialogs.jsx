import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElements =props.data.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messagesElements =props.data.messages.map(m => <Message id={m.id} message={m.message}/>);

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}
export default Dialogs;