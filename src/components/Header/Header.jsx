import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.bold}>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/dialogs">Active</a>

                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/dialogs">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/dialogs">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/dialogs" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </div>
     );
}
export default Header