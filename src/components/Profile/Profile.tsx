import React from "react";
import {addPost, changeNewTextCallback, newPostText, ProfilePageType, state} from "../../redux/state";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PropsType = {
    profilePage: ProfilePageType
    addPost:(postMessage: string)=>void
    newPostText:string
    changeNewTextCallback:(newText:string)=>void

}

export const Profile = (props:PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     newPostText={state.profilePage.newPostText}
                     addPost={props.addPost}
                     changeNewTextCallback={changeNewTextCallback}/>
        </div>
    )
}