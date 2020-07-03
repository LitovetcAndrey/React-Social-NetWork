import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/1" activeClassName={s.selected}>Сообщения Dima</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/2" activeClassName={s.selected}>Сообщения Pety</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/3" activeClassName={s.selected}>Сообщения Koly</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hello</div>
                    <div className={s.message}>How are your React</div>
                    <div className={s.message}>Weather id good</div>
                    <div className={s.message}>I am working right now</div>
                    <div className={s.message}>I have been working for an hour</div>
                    <div className={s.message}>I was work</div>
                    <div className={s.message}>I was working</div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;