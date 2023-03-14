import { Avatar } from '@material-ui/core'
import React from 'react'

function HeaderOptions({Icon, title, avatar}) {
  return (
    <div className='header__options'>
        {Icon && <Icon></Icon>}
        {avatar && <Avatar name={avatar}/>}
        <span>{title}</span>
    </div>
  )
}

export default HeaderOptions
