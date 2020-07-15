import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="app-wrapper">
                    <Aside/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs" render={() => <Dialogs data={props.data}/>}/>
                        <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
