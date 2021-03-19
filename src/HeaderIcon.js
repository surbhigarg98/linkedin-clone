import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counterSlice'
import './HeaderIcon.css'
function HeaderIcon({avatar,title,Icon,onClick}) {
    const user = useSelector(selectUser)
    return (
        <div className="headerIcon">
            {Icon && <Icon className="headerIcon__icon"/>}
            {avatar && (
                <Avatar src={user?.photoURL} className="headerIcon__avatar" onClick={onClick}>{user?.email[0]}</Avatar>
            )}
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderIcon
