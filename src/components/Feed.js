import { Avatar } from '@material-ui/core'
import React from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "../styles/feed.css"
function Feed() {
  return (
    <div className='feed'>
        <div className='feed__input'>
            <div className='feed__form'>
            <Avatar></Avatar>
            <form>
                <input type={'text'} placeholder="start a post"/>
                <input type={'submit'}/> 
            </form>
        </div>
        <div className='feed__options'>
        <div className='option'>
          <InsertPhotoIcon/>
          <span>photo</span>
        </div>
        <div className='option'>
          <YouTubeIcon/>
          <span>video</span>
        </div>
        <div className='option'>
          <TodayIcon/>
          <span>event</span>
        </div>
        <div className='option'>
          <AssignmentIcon/>
          <span>write article</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Feed
