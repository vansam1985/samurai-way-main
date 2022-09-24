import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.content}>

            <div>My post
                <textarea name="" id=""></textarea>
                <button>New post</button>

                <div className={s.post}>
                    <Post message="Hi, how are you"/>
                    <Post message="It my first post"/>
                </div>



            </div>
        </div>
    )
}