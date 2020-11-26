import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from "./components/Header/Header";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Aside from "./components/Aside/Aside";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {

    return (
        <div className="App">
            <Header/>
            <div className="app-wrapper">
                <Aside/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>

                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                    <Route path="/users" render={() => <UsersContainer/>
                    }/>
                </div>
            </div>
        </div>
    );
}

export default App;
