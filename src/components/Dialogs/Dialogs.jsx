import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.dialogPage;
    let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messagesElements =  props.dialogPage.messages.map(m => <Message id={m.id} message={m.message}/>);

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div>
            <div>
                <textarea
                    onChange={onNewMessageChange}
                    value={ state.newMessageBody}
                    placeholder={"enter your massage"}
                />
            </div>
            <div>
                <button onClick={onSendMessageClick}>Add message
                </button>
            </div>
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