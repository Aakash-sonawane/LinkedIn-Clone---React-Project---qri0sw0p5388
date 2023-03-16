import { Avatar } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Post from './Post';
import "../styles/feed.css"
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { db } from '../firebase';


function Feed() {
  const[posts,setPost]=useState([]);
  const[input, setInput]=useState();

  const submitPost=(e)=>{
    e.preventDefault();
    db.collection("posts").add({
      name:"aaksh",
      description:"webdeveloper",
      message:input,
      photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFjO6rbNAKcZtfgpqkhnqWGPwcH5hAArN1A&usqp=CAU",
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    // console.log(input)
    setInput("");
  }

  useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setPost(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
      // console.log(posts);
    })
  },[])
  console.log(posts);
  return (
    <div className='feed'>
        <div className='feed__input'>
            <div className='feed__form'>
            <Avatar/>
            <form onSubmit={submitPost}>
                <input type={'text'} value={input} placeholder="start a post" onChange={e=>setInput(e.target.value)}/>
                <input type={'submit'}/> 
            </form>
        </div>
        <div className='feed__options'>
        <div className='option'>
          <InsertPhotoIcon style={{color:"#70b5f9"}}/>
          <span>photo</span>
        </div>
        <div className='option'>
          <YouTubeIcon style={{color:"red"}}/>
          <span>video</span>
        </div>
        <div className='option'>
          <TodayIcon style={{color:"#e7a33e"}}/>
          <span>event</span>
        </div>
        <div className='option'>
          <AssignmentIcon style={{color:"#fc9295"}}/>
          <span>write article</span>
        </div>
      </div>
      </div>

      <div>
        <Post name="Aakash sonawane" description="i am a web-developer" message="making lkvdhefee veee" photoUrl="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"/>
      </div>
    </div>
  )
}

export default Feed
