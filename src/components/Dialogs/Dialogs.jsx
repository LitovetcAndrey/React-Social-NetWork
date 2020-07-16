import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements =props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messagesElements =props.state.messages.map(m => <Message id={m.id} message={m.message}/>);

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