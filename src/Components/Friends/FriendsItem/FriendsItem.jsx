import React from 'react'
import f from './FriendsItem.module.css'
import { NavLink } from 'react-router-dom';

const FriendsItem = (props) => {
    let path1 = "/friends/" + props.id;
    return (
        <div className={f.friendsItem}>
           <NavLink to={path1}>{props.name}</NavLink>
        </div>
    )
}

export default FriendsItem;