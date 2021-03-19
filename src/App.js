import React, { useEffect } from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import {useDispatch, useSelector} from 'react-redux'
import Login from './Login'
import { login, logout, selectUser } from './features/counterSlice';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch(login({
        displayName:authUser.displayName,
        photoURL:authUser.photoURL,
        email:authUser.email,
        uid:authUser.uid
      }))
    }else{
      dispatch(logout())
    }
  })
  },[])
  return (
    <div className="App">
     <Header/>
     {!user ? (
       <Login/>
     ):(
      <div className="app__body">
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>

     )}
    </div>
  );
}

export default App;
