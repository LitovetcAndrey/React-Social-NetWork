import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./Dialog/DialogItem";

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Pety"},
        {id: 3, name: "Koly"},
        {id: 4, name: "Masha"},
    ];

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);


    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are your React"},
        {id: 3, message: "Weather id good"},
        {id: 4, message: "I am working right now"},
        {id: 5, message: "I have been working for an hour"},
        {id: 6, message: "I was work"},
        {id: 7, message: "I was working"},
    ]
    let messagesElements = messages.map(m => <Message message={m.message}/>);

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