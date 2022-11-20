import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
export type PostType={
    id:number
    message:string
    likesCount: number
}
 export type ProfileType={
    posts:PostType[]
}
type DialogType={
    id:number
    name:string
}
type MessageType={
    dialogs: DialogType[]
}
let dialogs = [
    {id: 1, name: 'Vova'},
    {id: 2, name: 'Sveta'},
    {id: 4, name: 'Ira'},
    {id: 5, name: 'Ivan'}
]



let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo Yo'},
    {id: 3, message: 'How are you'},
    {id: 4, message: 'Bay'}
]


let posts = [
    {id: 1, message: 'Hi, how are you', likesCount: 1},
    {id: 2, message: 'It my first post', likesCount: 12},
    {id: 2, message: 'It my first post', likesCount: 12},
    {id: 2, message: 'It my first post', likesCount: 12},
    {id: 2, message: 'I love you', likesCount: 4}

]
ReactDOM.render(
    <App posts={posts} dialogs={dialogs}/>,
  document.getElementById('root')
);