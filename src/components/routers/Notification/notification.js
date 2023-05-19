import React from 'react'
import NotiBox from './notiBox'

function NotificationSection() {
  return (
    <>
    <div className='sidebar' style={{
      // display: flex;
      // "flex": 8.55,
      "fontSize":"25px"
      // flex-direction: column;
    }}>
        <div className='sidebar__recent'>
        <div className='notification_sidebar'>

        <h6>Manage your Notifications</h6>
        <h6>View Settings</h6>
        </div>
        </div>

    </div>



    <div className='feed feed-myNetwork' style={{
      "width":"100px"
    }}>
        <div className='feed__input' style={{"gap":"23px"}}>
          {/* <h3>Recent job Searches</h3> */}
          {/* <div>
            
            <hr/>
            <div>
              reactjs <i>14 new</i>
              <p>pune,Maharashtra, India Entry leveel</p>
            </div>
          </div> */}
          <NotiBox/>
          <NotiBox/>
          <NotiBox/>
          <NotiBox/>
          <NotiBox/>
          <NotiBox/>
          <NotiBox/>
          <NotiBox/>
          <NotiBox/>
          <NotiBox/>
          <NotiBox/>
          <NotiBox/>
          <NotiBox/>


            
      </div>

      
      
    </div>
    </>
  )
}

export default NotificationSection
