import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo =()=>{
    return(
        <div>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=8966ed8c0339828595dd914e2aba98bc-5224388-images-thumbs&n=13&exp=1"/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>

        </div>
    )
}