import { BusinessCenter, Chat, Home, Search, SupervisorAccount,Notifications } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from './features/counterSlice'
import { auth } from './firebase'
import './Header.css'
import HeaderIcon from './HeaderIcon'

function Header() {
    const dispatch = useDispatch()
    const logoutApp =()=>{
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo"/>
                <div className="header__search">
                    <Search/>
                    <input type="text" placeholder="Search"/>
                </div>
                </div>
                <div className="header__right">
                    <HeaderIcon title="Home" Icon={Home}/>
                    <HeaderIcon title="My Network" Icon={SupervisorAccount}/>
                    <HeaderIcon title="Jobs" Icon={BusinessCenter}/>
                    <HeaderIcon title="Messaging" Icon={Chat}/>
                    <HeaderIcon title="Notifications" Icon={Notifications}/>
                    <HeaderIcon title="Me" onClick={logoutApp} avatar={true}/>
                </div>
        </div>
    )
}

export default Header
