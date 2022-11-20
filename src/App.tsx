import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
// import {DialogItem} from "./components/Dialogs/DialogItem/DialogItem";
import {BrowserRouter, Route} from "react-router-dom";
import Dialog from "./components/Dialogs/Dialogs";
import {ProfileType } from '.';


export type PostType={
    id:number
    message:string
    likesCount: number
}



const App=(props:ProfileType) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                {/*<Route path='/dialogs' component={Dialog}/>*/}
                {/*<Route path='/profile' component={Profile}/>*/}

                <Route path={'/dialogs'} render={()=><Dialog/>}/>
                <Route path={'/profile'} render={()=><Profile posts={props.posts}/>}/>
            </div>
        </div>
        </BrowserRouter>
    )
        ;
}

export default App;
