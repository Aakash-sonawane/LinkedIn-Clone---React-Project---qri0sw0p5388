import React from 'react'

function ProfileBox() {
  return (
    <div className='profile'>
            <img src="https://www.freecodecamp.org/news/content/images/size/w600/2021/06/w-qjCHPZbeXCQ-unsplash.jpg" width={'${60}px'} height={'${60}px'}/>
            <div className='profile_details'>
                {/* <Avatar src={}/> */}
                <h4>Akash sonawane</h4>
                <p>Web Developer</p>
            </div>
            <button>Connect</button>
        </div>
  )
}

export default ProfileBox
