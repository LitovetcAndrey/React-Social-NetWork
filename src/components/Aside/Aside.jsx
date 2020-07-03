import React from "react";
import s from "./Aside.module.css"
import {NavLink} from "react-router-dom";

console.log("class s = ", s);
//для использования двух классов
// let classesNew=`${s.item} ${s.active}`

const Aside = () => {
    return (
        <aside className={s.aside}>
            <div className={s.item}>
                <NavLink   to="/profile" activeClassName={s.selected}>Profile</NavLink>
            </div>
            <div className={s.item}>
                {/* Два класса вместе */}
                {/*<NavLink to="/dialogs" className={`${s.item} ${s.active}`}>Messages</NavLink>*/}
                <NavLink to="/dialogs" activeClassName={s.selected}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.selected}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.selected}>Music</NavLink>
            </div>
            <div>
                <NavLink to="#">Settings</NavLink>
            </div>
        </aside>)
};

export default Aside