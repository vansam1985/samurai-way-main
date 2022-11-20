import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

type dialogType = {
    name: string
    id: number
}

export const DialogItem = (props: dialogType) => {
    let path = 'dialog/1' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};