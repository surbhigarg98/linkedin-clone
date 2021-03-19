import { Avatar } from '@material-ui/core'
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Feed.css'
import FeedOption from './FeedOption'
import { db } from './firebase'
import Post from './Post'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counterSlice'
import FlipMove from'react-flip-move'

function Feed() {
    const [posts,setPosts] = useState([])
    const [input,setInput] = useState('')
    const user = useSelector(selectUser)
    useEffect(()=>{
     db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>(
         setPosts(snapshot.docs.map((doc)=>({
             id:doc.id,
             data:doc.data()
         })))
     ))
    },[])
    const sendPost=(e)=>{
       e.preventDefault()
       db.collection('posts').add({
           name:user.displayName,
           photoURL:user.photoURL || "",
           description:user.email,
           message:input,
           timestamp:firebase.firestore.FieldValue.serverTimestamp()
       })
       setInput('')
    }
    return (
        <div className="feed">
           <div className="feed__top">
           <div className="feed__input">
                <Avatar className="feed__avatar" src={user.photoURL}>{user.email[0]}</Avatar>
                <div className="feedinput__container">
                    <Create/>
                    <form>
                        <input type="text" placeholder="Start a Post" value={input} onChange={e=>setInput(e.target.value)}/>
                        <button className="innput__button" disabled={!input} onClick={sendPost}>Send</button>
                    </form>
                </div>
            </div>
            <div className="feed__options">
                <FeedOption Icon={Image} title="Photo" color="#70B5F9"/>
                <FeedOption Icon={Subscriptions} title="Video" color="#7FC15E"/>
                <FeedOption Icon={EventNote} title="Event" color="#E7A749"/>
                <FeedOption Icon={CalendarViewDay} title="Write Article" color="#F5987E"/>
            </div>
           </div>
           <div className="feed__post">
             <FlipMove >
             {posts.map(post=>(
                  <Post key={post.id} name={post.data.name} photoUrl={post.data.photoURL} description={post.data.description} message={post.data.message}  />
              ))}
             </FlipMove>
           </div>
        </div>
    )
}

export default Feed
