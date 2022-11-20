import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postElement= props.posts.map(p=>  <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.content}>
            <div>
                <h3>My post</h3>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>New post</button>
                </div>
                <div className={s.post}>
                    {postElement}
                </div>


            </div>
        </div>
    )
}