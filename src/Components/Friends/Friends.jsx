import React from 'react'
import f from './Friends.module.css'
import FriendsItem from './FriendsItem/FriendsItem'

const Friends = (props) => {
    
    let friendsElements = props.store.sidebarReducer.friends.map(f => <FriendsItem id={f.id} name={f.name}  />);
    return (
        <div className={f.friends}>
            {friendsElements}
        </div>
    )
}

export default Friends;