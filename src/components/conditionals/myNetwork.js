import React from 'react'
import SidebarRecent from './sidebarRecent/sidebarRecent'
import ProfileBox from './mynetwork/profileBox'
import { Widgets } from '@material-ui/icons'

function MyNetwork() {
  return (
    <>
      <div className='sidebar' style={{
        "fontSize": "25px"
      }}>
        <div className='sidebar__profile'>
            
          <div className='sidebar__recent'>
            <SidebarRecent first={"Jobs"} second={"Contact"} third={"Follwing & followers"} fourth={"Groups"} fifth={"Events"} sixth={"Pages"} seventh={"Newsletter"} eigtht={"Hashtags"} />
          </div>
        </div>
      </div>


      <div className='feed feed-myNetwork' style={{
      "width":"100px"
    }}>
        <div className='feed__input'>
          <p>No pending invitations</p>  
      </div>

      <div className='feed__input'>
      <p>Recommended for you</p>
      <div className='network_connections_container'>

        <div className='network_connection'>
        <ProfileBox url={"https://www.freecodecamp.org/news/content/images/size/w600/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"} name={"Akash sonawane"}/>
        <ProfileBox url={"https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg"} name={"Utkarsh sonawane"}/>
        <ProfileBox url={"https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"} name={"Rahul patil"}/>
        <ProfileBox url={"https://www.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg"} name={"chandu patil"}/>
        <ProfileBox url={"https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} name={"Arfat salman"}/>
        <ProfileBox url={"https://img.freepik.com/premium-photo/illustration-with-abstract-felt-tip-colorful-background_594970-82.jpg"} name={"kishore yeole"}/>
        <ProfileBox url={"https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000"} name={"sagar sonje"}/>
        <ProfileBox url={"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470"} name={"Urvashi rajat"}/>


        </div>
        

      </div>
      
      </div>
      
    </div>


    {/* <Widgets/> */}

    </>
  )
}

export default MyNetwork
