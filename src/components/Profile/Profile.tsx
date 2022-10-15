import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
export const Profile =()=>{
    return(
        <div>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=8966ed8c0339828595dd914e2aba98bc-5224388-images-thumbs&n=13&exp=1"/>
            </div>
            <div>ava + description</div>
          <MyPosts/>
        </div>
    )
}