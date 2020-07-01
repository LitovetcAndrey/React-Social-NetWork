import React from "react";
import s from "./Aside.module.css"
console.log("class s = ",s);
//для использования двух классов
// let classesNew=`${s.item} ${s.active}`

const Aside = () => {
    return (<aside className={s.aside}>
        <div >
            <a className={s.item} href="#">Profile</a>
        </div>
        <div >
            <a className={`${s.item} ${s.active}`} href="#">Messages</a>
        </div>
        <div className="item">
            <a className={s.item} href="#">News</a>
        </div>
        <div className="item">
            <a className={s.item} href="#">Music</a>
        </div>
        <div>
            <a href="#">Settings</a>
        </div>
    </aside>)
};

export default Aside