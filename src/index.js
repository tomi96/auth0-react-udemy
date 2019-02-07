import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './Auth';

const auth = new Auth();

let state = {}
window.setState = (changes) => {
    state = Object.assign({},state, changes);
    ReactDOM.render(<App {...state} />, document.getElementById('root'));
};

let username = auth.getProfile().given_name || ""
/* eslint no-restricted-globals: 0*/
let initialState ={
    name: username,
    location: location.pathname.replace(/^\/?|\/$/g, ""),
    auth
};

window.setState(initialState);

// registerServiceWorker;
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
