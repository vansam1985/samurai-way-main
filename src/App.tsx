import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Dialog from "./components/Dialogs/Dialogs";
import {changeNewTextCallback, newPostText, RootStateType, state, subscribe} from "./redux/state";
import {renderTree} from "./render";


type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    newPostText:string
    changeNewTextCallback:(newText:string)=>void

}

const App=(props:AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={()=><Dialog dialogsPage={props.state.dialogsPage}/>}/>
                <Route path={'/profile'} render={()=><Profile profilePage={props.state.profilePage}
                                                              addPost={props.addPost}
                                                              newPostText={state.profilePage.newPostText}
                                                              changeNewTextCallback={changeNewTextCallback}/>}/>
            </div>
        </div>
    )
        ;
}

export default App;
