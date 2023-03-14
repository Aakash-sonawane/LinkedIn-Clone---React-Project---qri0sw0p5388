import React from 'react'
import "../styles/sidebar.css"
import { Avatar } from '@material-ui/core'

function SideBar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
            <img src="https://www.freecodecamp.org/news/content/images/size/w600/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"/>
            <div className='profile_details'>
                <Avatar/>
                <h4>AakaSh Sonawane</h4>
                <p>Web Developer</p>
            </div>

            <div className='profile_stats'>
              <span>Who viewed your profile</span>
              <span className='stats__number'>20</span>
            </div>
            <div className='profile_stats'>
              <span>Connection<br/><b>Grow Your Network</b></span>
              <span className='stats__number'>150</span>
            </div>
        </div>


        <div className='sidebar__recent'>
          <p>Recent</p>
          <p className='hash'><span>#</span>Branding</p>
          <p className='hash'><span>#</span>Marketing</p>
          <p className='hash'><span>#</span>programming</p>
          <p className='hash'><span>#</span>reactjs</p>
          <p className='hash'><span>#</span>redux</p>
        </div>
      
    </div>
  )
}

export default SideBar
