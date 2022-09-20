import React from 'react';
import './App.css';
import {Header} from "./Header";
import { Technologies } from './Technologies';
import {Footer} from "./Footer";

function App() {
  return (
    <div className='app-wrapper'>
       <header className='header'>
           <img src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/12887266/image/0b310df572da5a2b0c3a393ad058b3bf" alt=""/>
       </header>
        <nav className='nav'>
            <div>
                Profile
            </div>
            <div>Messages</div>
        </nav>
        <div className='content'>
            Main content
        </div>
    </div>
  );
}

export default App;
