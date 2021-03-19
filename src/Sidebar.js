import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/counterSlice';
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem =(topic)=>(
        <div className="sidebar__recent">
           <p> <span className="hashtag"># </span>{topic}</p>
        </div>
    );
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt=""/>
                <Avatar src={user?.photoURL} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="siderbar__statNumber">234</p>
                </div>
                <div className="sidebar__stat">
                    <p>Number of post</p>
                    <p className="siderbar__statNumber">34</p>
                </div>
            </div>
            <div className="sidebar__button">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('studentVoice')}
                {recentItem('programming')}
                {recentItem('fresher')}
                {recentItem('rreactHooks')}
            </div>
        </div>
    )
}

export default Sidebar
