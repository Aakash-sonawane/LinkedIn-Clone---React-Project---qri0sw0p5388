import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "../styles/header.css"
import HeaderOptions from './HeaderOptions';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Avatar } from '@material-ui/core'
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import firebase from 'firebase/compat'

function Header({pagetoShow,setPagetoShow}) {

  const user=useSelector(selectUser);
  
  // console.log(user);
  return (
    <div className='header'>
         <div className='header__left'>
            <div className='header__logo'>
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/>
            </div>
            <div className='header__search'>
                <SearchIcon/>
                <input type={'text'} placeholder='search'/>
            </div>
         </div>
         <div className='header__right'>
          {/* <div className='opt'>
          </div> */}
          <HeaderOptions  Icon={HomeIcon} title={"Home"} onClick={()=>{setPagetoShow("home")}}/>
          <HeaderOptions  Icon={PeopleIcon} title={"My Networks"} onClick={()=>{setPagetoShow("network")}}/>
          {/* <HeaderOptions Icon={MessageIcon} title={"Messages"} onClick={()=>{setPagetoShow("message")}}/> */}
          <HeaderOptions Icon={BusinessCenterIcon} title={"Jobs"} onClick={()=>{setPagetoShow("job")}}/>
          <HeaderOptions Icon={NotificationsIcon} title={"Notification"} onClick={()=>{setPagetoShow("notification")}}/>
          <HeaderOptions avatar={Avatar} title={user.displayName}/>
          <div className='logout_icon'>
          <HeaderOptions Icon={ExitToAppIcon} title={"LOGOUT"} onClick={e=>firebase.auth().signOut()}/>
          </div>
         </div>
    </div>
  )
}

export default Header
