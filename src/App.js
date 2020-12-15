import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Aside from "./components/Aside/Aside";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login"

const App = (props) => {
    return (
        <div className="App">
            <HeaderContainer/>
            <div className="app-wrapper">
                <Aside/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>

                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                    <Route path="/users" render={() => <UsersContainer/>}/>

                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
