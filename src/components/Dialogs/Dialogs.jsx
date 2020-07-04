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
                    {/*<DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>*/}
                    {/*<DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>*/}
                    {/*<DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>*/}
                    {/*<DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>*/}
                    {dialogsData.map(function (dialogsData) {
                        return <DialogItem id={dialogsData.id} name={dialogsData.name}/>
                    })}

                </div>
                <div className={s.messages}>
                    {/*<Message message={messagesData[0].message}/>*/}
                    {/*<Message message={messagesData[1].message}/>*/}
                    {/*<Message message={messagesData[2].message}/>*/}
                    {/*<Message message={messagesData[3].message}/>*/}
                    {/*<Message message={messagesData[4].message}/>*/}
                    {/*<Message message={messagesData[5].message}/>*/}
                    {/*<Message message={messagesData[6].message}/>*/}
                    {messagesData.map(function (messagesData) {
                        return <Message message={messagesData.message}/>
                    })}
                </div>
            </div>
        </div>
    );
}
export default Dialogs;