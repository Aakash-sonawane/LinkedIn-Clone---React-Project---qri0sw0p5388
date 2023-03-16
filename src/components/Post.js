import { Avatar } from '@material-ui/core'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import "../styles/post.css"
function Post({name,description, message,photoUrl}) {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__header_left'>
            <Avatar src={photoUrl}/>
            <div className='post__profile_detail'>
            <h3>{name}</h3>
            <p>{description}</p>
            </div>
        </div>
        
      <MoreVertIcon/>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>
      <div className='post__footer'>
        <div className='post__footer__options'>
            <ThumbUpIcon/>
            <span>Like</span>
        </div>
        <div className='post__footer__options'>
            <ModeCommentIcon/>
            <span>comment</span>
        </div>
        <div className='post__footer__options'>
            <ShareIcon/>
            <span>share</span>
        </div>
        <div className='post__footer__options'>
            <SendIcon/>
            <span>send</span>
        </div>
      </div>
    </div>
  )
}

export default Post
