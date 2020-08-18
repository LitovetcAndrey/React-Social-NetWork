import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {

    return (
        <div className="App">
            <Header/>
            <div className="app-wrapper">
                <Aside state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() =>
                        <Dialogs store={props.store}
                        />}
                    />

                    <Route path="/profile" render={() =>
                        <Profile
                            state={props.state.profilePage}
                            dispatch={props.dispatch}
                            store={props.store}
                        />}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
