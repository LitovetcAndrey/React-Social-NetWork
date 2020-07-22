import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, updateNewPostChange} from "./redux/state";

export let rerenderEntireTree=(state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostChange={updateNewPostChange}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
