import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewTextCallback, newPostText, RootStateType, state, subscribe} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let renderTree = ()=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} newPostText={state.profilePage.newPostText} changeNewTextCallback={changeNewTextCallback}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}





