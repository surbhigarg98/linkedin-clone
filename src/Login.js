
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/counterSlice'
import { auth } from './firebase'
import './Login.css'

function Login() {
    const dispatch = useDispatch()
    const [name,setName] = useState('')
    const [profilePic,setProfilePic]= useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const register =()=>{
      if(!name){
          alert('Please enter full name')
      }
      auth.createUserWithEmailAndPassword(email,password).then((authUser)=>{
          authUser.user.updateProfile({
              displayName:name,
              photoURL:profilePic
          })
          .then(()=>{
              dispatch(login({
                displayName:name,
                photoURL:profilePic,
                email:authUser.user.email,
                uid:authUser.user.uid
            }))
          })
      }).catch((error)=>alert(error))
    }
    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then((authUser)=>{
            dispatch(login({
                displayName:authUser.user.displayName,
                photoURL:authUser.user.photoURL,
                email:authUser.user.email,
                uid:authUser.user.uid
            }))
        }).catch((error)=>alert(error))
    }
    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"/>
            <form>
                <input type='text' value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name (required if rejistering)"/>
                <input type='text' value={profilePic} onChange={e=>setProfilePic(e.target.value)} placeholder="Image Url (Optional)"/>
                <input type='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email'/>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit" onClick={loginToApp} >Sign In</button>

            </form>
                <p>Not a member?{" "}<span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
