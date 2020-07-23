import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
        <img src="https://скачать-мессенджер.рф/wp-content/uploads/2018/07/kartinki-dlya-muzhchin-na-avatar-vatsap4.png" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;

