import React from "react";
import s from './Post.module.css'
 type PostType = {
    message: string
}

export const Post: React.FC<PostType> =(props)=>{
    return(
                <div className={s.post}>
                    <div className={s.item}>
                        <img src="https://yandex-images.clstorage.net/mE9c93j32/ef4f11d__/8QafW_ODcD8g_pk2tLMXLn6kpetmo5vjzFBdWw1-hjHT5Ptx097hLpARldeOoqRMIRoDpUfUImTKNp8r4jWHgrA7_kbD7wkDCPqZOoCXewpiiIXXRrPL_8UxATZcKstN1sHmFd8vVbNN2WVmI199jIlzTvwWpQYZyns7x9dM1s9htvO_6-_pryji5D5Mv3uiigWZy7Zafxa0FFy6YLIChYr1s8TTNwG75Xm5MstHeTihr3KEJhErPQ7LlwJvNPprbfL_0z-v6aM42pxOWHcLMvaJWfvGksPy9Cj4Tlyu1h0OCe9Mk7dhG419IfJ78yk0iUcC8Jaly6lCn49S_-zOp11qN8fHVxGTiAoIUhx3K45-ZY3v4noP-gzkGA7IdhrpRpX7ADNXiR_RMVmK28uFBKnXGmTKcTc55m_Dju_E0ofZ-g8fP4fxWwCiDEpIZzcmLlnFE2rCZ9rofFhKaC4mqZp5z6xfh8kDQQn9zqsnqbyhq1Kcgr3fna7Lz4bTuN6LQcJL31NHnbcohrxGgHODamaBictSyjvWVMzoFkyGarXyuWvQW4MlJ5ldLcbHk6kQ5QOGUFaVv31Gt6e2H3Ba81Xac79bqwmDMFaYWoRrI3LKeT3rshIPJhhI7OpAyqZJmsFr6NcbHVORdbUyz-flFAWnWvQy8dM90ovbvv9cNls1Po9vq4f9Czh6hLbgfxseLlVdTyLibx7gyARibFIOaXaVi6ijE5UXYXElhsdz6aw1hwogxgXDyWKfzzJzyP5_rf4vn__3ASsAftyW2AM31qJJvWfaXvuSCBAk-vzC2p2GaXvQ-ztJr905_U53G-kEPTeGHOaBw_nWb5O2k0Ry52n-I7P__60ThGrcLngr53pOUSFf5sbHdowg8PKYAkIlepX76B8bMQvp9QE-g5stoFHDkuwetTsNkk_vgt84fh_9fp-jHy8V51y6WAI44z9m0p2p1xoWz274uGCORLqM" alt=""/>
                        post 1
                        {props.message}
                    </div>
                    <div>
                        <span>like</span>
                    </div>
                   
                </div>
    )
}