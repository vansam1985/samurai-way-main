import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {DialogPageType} from "../../redux/state";

type PropsType = {
    dialogsPage: DialogPageType
}
const Dialog = (props:PropsType) => {
    const dialogs = props.dialogsPage.dialogs
    const messages = props.dialogsPage.messages


    let dialogsElement = dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = messages.map(m=> <Message message={m.message}/>);
    return (

        <div className={s.dialogs}>



                   <div className={s.dialogItem}>
                   {dialogsElement}
               </div>
                   <div className={s.messages}>
                       {messagesElement}
                   </div>




        </div>
    );
};

export default Dialog;