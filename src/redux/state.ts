let onChange =()=>{

}

export const subscribe = (observer:()=>void) =>{
    onChange=observer;
}

type PostType = {
    id: number
    message: string
    likesCount: number
}
type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export let state: RootStateType = {
    profilePage: {

        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 1},
            {id: 2, message: 'It my first post', likesCount: 12},
            {id: 2, message: 'It my first post', likesCount: 12},
            {id: 2, message: 'It my first post', likesCount: 12},
            {id: 2, message: 'I love you', likesCount: 4}
        ],
        newPostText: '',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Vova'},
            {id: 2, name: 'Sveta'},
            {id: 4, name: 'Ira'},
            {id: 5, name: 'Ivan'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo Yo'},
            {id: 3, message: 'How are you'},
            {id: 4, message: 'Bay'}
        ]
    },

}
export let addPost  = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    onChange();
}

export let newPostText  = (newText:string) => {

    state.profilePage.newPostText=newText
    onChange();
}
export const changeNewTextCallback = (newText:string) => {
    state.profilePage.newPostText=newText;
    onChange();
}


