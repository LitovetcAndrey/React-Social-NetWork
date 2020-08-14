import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state=props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message}/>);

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body=e.target.value;
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    }

    return (
        <div>
            <div>
                <textarea
                    onChange={onNewMessageChange}
                    value={state.newMessageBody}
                    //value={props.store.getState().dialogsPage.newMessageBody}
                    cols="30" rows="2"/>
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