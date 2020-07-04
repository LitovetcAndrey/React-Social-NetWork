import React from "react";
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";


const Dialog=(props)=>{
    return(
        <div className={s.dialog}>
            <NavLink to={props.url} activeClassName={s.selected}>{props.dialog}</NavLink>
        </div>
    )
}
export default Dialog;