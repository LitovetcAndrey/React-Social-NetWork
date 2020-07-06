import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./Dialog/DialogItem";

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Pety"},
        {id: 3, name: "Koly"},
        {id: 4, name: "Masha"},
    ];

    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are your React"},
        {id: 3, message: "Weather id good"},
        {id: 4, message: "I am working right now"},
        {id: 5, message: "I have been working for an hour"},
        {id: 6, message: "I was work"},
        {id: 7, message: "I was working"},
    ]

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsData.map((el) => {
                        return <DialogItem id={el.id} name={el.name}/>
                    })}
                </div>
                <div className={s.messages}>
                    {messagesData.map(el => <Message message={el.message}/>)}
                </div>
            </div>
        </div>
    );
}
export default Dialogs;