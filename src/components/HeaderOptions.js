import { Avatar } from '@material-ui/core'
import React from 'react'
import "../styles/header.css"
import firebase from 'firebase/compat'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice';

// const user=useSelector(selectUser)


function HeaderOptions({Icon, title, avatar}) {

  const user=useSelector(selectUser);
  return (
    <div className='header__options'>
        {Icon && <Icon></Icon>}
        {avatar && <Avatar name={avatar} src={user.photoURL} onClick={e=>firebase.auth().signOut()}/>}
        <span>{title}</span>
    </div>
  )
}

export default HeaderOptions
