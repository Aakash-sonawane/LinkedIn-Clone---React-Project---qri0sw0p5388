// import React from 'react'
import React, { useEffect, useState } from 'react'
import '../../styles/App.css';
import Feed from '../Feed';
import Header from '../Header';
import SideBar from '../SideBar';
import Widjet from "../Widjet"
import Login from '../Login';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, logoutuser, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import HomePage from './home/homePage';
import JobSection from './jobs';
import NotificationSection from './Notification/notification';
import MyNetwork from './myNetwork';


function Root() {
    const user = useSelector(selectUser);
    // console.log(user);
    const dispatch=useDispatch();
    const [pagetoShow,setPagetoShow]=useState("home");
    
    useEffect(()=>{
      // console.log("qqdiqjdiqjqidqidjijdidjq")
      auth.onAuthStateChanged((userAuth)=>{
        // console.log(userAuth);
        if(userAuth){
          dispatch(loginuser({
            email:userAuth.email,
            uid:userAuth.uid,
            photoURL:userAuth.photoURL,
            displayName:userAuth.displayName
          }))
        }
        else{
          // logout
          dispatch(logoutuser())
        }
      })
    },[])
    
      return (
        <>
        {
          !user ?(<Login/>)
          :
        <div className='app-wrapper'>
          <Header pagetoShow={pagetoShow} setPagetoShow={setPagetoShow}/>
          <div className='app__body'>
            {
              pagetoShow==="home" && <HomePage/>
            }

            {
              pagetoShow==="job" && <JobSection/>
            }

            {
              pagetoShow==="notification" && <NotificationSection/>
            }

            {
              pagetoShow==="network" && <MyNetwork/>
            }
            
            





            
          </div>
        </div>
        }
        
          
        </>
      )
}

export default Root
