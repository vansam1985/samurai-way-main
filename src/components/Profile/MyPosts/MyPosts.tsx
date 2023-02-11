import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {newPostText, ProfilePageType} from "../../../redux/state";


type PropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    newPostText: string
    changeNewTextCallback: (newTeat: string) => void

}

export const MyPosts = (props: PropsType) => {
    const posts = props.profilePage.posts


    let postElement = posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.addPost(props.profilePage.newPostText)
        props.profilePage.newPostText=''
    }
const newTextChangeHandeler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    props.changeNewTextCallback(e.currentTarget.value)
}
    return (
        <div className={s.content}>
            <div>
                <h3>My post</h3>
                <div>
                    <textarea onChange={newTextChangeHandeler}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.post}>
                    {postElement}
                </div>


            </div>
        </div>
    )
}