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
        <ProfileBox/>
        <ProfileBox/>
        <ProfileBox/>
        <ProfileBox/>
        <ProfileBox/>
        <ProfileBox/>
        <ProfileBox/>
        <ProfileBox/>


        </div>
        

      </div>
      
      </div>
      
    </div>


    {/* <Widgets/> */}

    </>
  )
}

export default MyNetwork
