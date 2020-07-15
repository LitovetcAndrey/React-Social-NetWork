import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {

    // let SomeComponent=()=><Dialogs />;

    let dialogs = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Pety"},
        {id: 3, name: "Koly"},
        {id: 4, name: "Masha"},
    ];

    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are your React"},
        {id: 3, message: "Weather id good"},
        {id: 4, message: "I am working right now"},
        {id: 5, message: "I have been working for an hour"},
        {id: 6, message: "I was work"},
        {id: 7, message: "I was working"},
    ]

    // let data=[dialogs,messages];
    let data = {
        "dialogs":dialogs,
        "messages":messages
    }

    let posts = [
        {id: 1, message: "Hello !", likesCount: 3},
        {id: 2, message: "Hi my friend !!!", likesCount: 4},
        {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
    ];

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="app-wrapper">
                    <Aside/>
                    <div className="app-wrapper-content">
                        {/*<Route path="/dialogs" component={Dialogs}/>*/}
                        {/*<Route path="/profile" component={Profile}/>*/}
                        {/*<Route path="/dialogs" component={SomeComponent}/>*/}
                        <Route path="/dialogs" render={()=><Dialogs data={data} />}/>
                        <Route path="/profile" render={()=><Profile posts={posts} />}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
