import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.


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

let dataDialogs = {
    "dialogs":dialogs,
    "messages":messages
}

let posts = [
    {id: 1, message: "Hello !", likesCount: 3},
    {id: 2, message: "Hi my friend !!!", likesCount: 4},
    {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
    {id: 4, message: "Hi, it's my first post!!!", likesCount: 8},
    {id: 5, message: "Hi, it's my first post!!!", likesCount: 8},
    {id: 6, message: "Hi, it's my first post!!!", likesCount: 8},
    {id: 7, message: "Hi, it's my first post!!!", likesCount: 8},
    {id: 8, message: "Hi, it's my first post!!!", likesCount: 8},
    {id: 9, message: "Hi, it's my first post!!!", likesCount: 8},
    {id: 10, message: "Hi, it's my first post!!!", likesCount: 8},
];

ReactDOM.render(
  <React.StrictMode>
    <App data={dataDialogs} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
