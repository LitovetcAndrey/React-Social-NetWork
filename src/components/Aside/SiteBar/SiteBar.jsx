import React from "react";
import s from './SiteBar.module.css'

const SiteBar = (props) => {
    let friendsElements = props.sidebar.friends.map(f =>
        <div className={s.item} key={f.id}>
            <img className={s.face} src={f.photo} alt="" align="bottom"/>
              <div>{f.name}</div>
        </div>
    );
    return (
        <div className={s.wrapper}>
            <h3> Friends</h3>
            <div className={s.content}>
                {friendsElements}
            </div>
        </div>

    );
}

export default SiteBar