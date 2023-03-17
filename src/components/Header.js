import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "../styles/header.css"
import HeaderOptions from './HeaderOptions';
import { Avatar } from '@material-ui/core'
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

function Header() {

  const user=useSelector(selectUser);
  console.log(user);
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
          <HeaderOptions Icon={HomeIcon} title={"Home"}/>
          <HeaderOptions Icon={PeopleIcon} title={"My Networks"}/>
          <HeaderOptions Icon={MessageIcon} title={"Messages"}/>
          <HeaderOptions Icon={BusinessCenterIcon} title={"Jobs"}/>
          <HeaderOptions Icon={NotificationsIcon} title={"Notification"}/>
          <HeaderOptions avatar={Avatar} title={user.displayName}/>
         </div>
    </div>
  )
}

export default Header
