import React from 'react'

function ProfileBox(props) {
  return (
    <div className='profile'>
            <img src={props.url} width={'${60}px'} height={'${60}px'}/>
            <div className='profile_details'>
                {/* <Avatar src={}/> */}
                <h4>{props.name}</h4>
                <p>Web Developer</p>
            </div>
            <button>Connect</button>
        </div>
  )
}

export default ProfileBox
