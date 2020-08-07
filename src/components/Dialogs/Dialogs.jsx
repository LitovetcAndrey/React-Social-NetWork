import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
        newMessage.current.value="";
    }

    return (
        <div>
            <div>
                <textarea
                    ref={newMessage}
                    cols="30"
                    rows="2"/>
            </div>
            <div>
                <button onClick={addMessage}>Add message
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