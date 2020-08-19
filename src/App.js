import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <div className="App">
            <Header/>
            <div className="app-wrapper">
                <Aside state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer
                            store={props.store}
                        />}
                    />

                    <Route path="/profile" render={() =>
                        <Profile
                            store={props.store}
                        />}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
