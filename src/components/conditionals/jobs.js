import React from 'react'
import SidebarRecent from './sidebarRecent/sidebarRecent'

function JobSection() {
  return (
    <>
    <div className='sidebar' style={{
      // display: flex;
      // "flex": 8.55,
      "fontSize":"25px"
      // flex-direction: column;
    }}>

         <div className='sidebar__profile'>
            {/* <img src="https://www.freecodecamp.org/news/content/images/size/w600/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"/> */}
            {/* <div className='profile_details'> */}
                {/* <Avatar src={user.photoURL}/>  */}
                 <h4></h4> 
                {/* <p>Web Developer</p> */}
            {/* </div> */}

            {/* <div className='profile_stats'>
              <span>Who viewed your profile</span>
              <span className='stats__number'>20</span>
            </div> */}
            {/* <div className='profile_stats'>
              <span>Connection<br/><b>Grow Your Network</b></span>
              <span className='stats__number'>150</span>
            </div> */}
        <div className='sidebar__recent'>
          {/* <p>Recent</p> */}
          {/* <p className='hash'><span>#</span>Jobs</p>
          <p className='hash'><span>#</span>Contacts</p>
          <p className='hash'><span>#</span>Follwing & followers</p>
          <p className='hash'><span>#</span>Groups</p>
          <p className='hash'><span>#</span>Events</p>
          <p className='hash'><span>#</span>Pages</p>
          <p className='hash'><span>#</span>Newsletter</p>
          <p className='hash'><span>#</span>Hashtags</p> */}

          {/* <SidebarRecent first={"Jobs"} second={"Contact"} third={"Follwing & followers"} fourth={"Groups"} fifth={"Events"} sixth={"Pages"} seventh={"Newsletter"} eigtht={"Hashtags"}/> */}
          <SidebarRecent first={"My jobs"} second={"Job alerts"} third={"Skill Assessments"} fourth={"Interview prep"} fifth={"Resume Builder"} sixth={"Job seeker guidance"} seventh={"Application setting"} eigtht={"Hashtags"}/>
        </div> 
      
        </div>


    </div>


    <div className='feed feed-myNetwork' style={{
      "width":"100px"
    }}>
        <div className='feed__input'>
          <h3>Recent job Searches</h3>
          <div>
            <div>
              reactjs <i style={{"color":"blue"}}>28 new</i>
              <p>pune,Maharashtra, India Entry leveel</p>
            </div>
            <hr/>
            <div>
              Frontend <i style={{"color":"blue"}}>56 new</i>
              <p>pune,Maharashtra, India Entry leveel</p>
            </div>
          </div>

            
      </div>

      <div className='feed__input'>
      <h3>Recommended for you</h3>
      <p>Base on your profile</p>
      <div className='job_box'>
        <h4>React.js developer</h4>
        <p>React developers</p>
        <p>india</p>
        <hr/>
      </div>
     
      <div>
        <h4>Java Developer</h4>
        <p>Enfotis</p>
        <p>india</p>
        <hr/>
      </div>
      <div>
        <h4>Frontend Developer</h4>
        <p>react developers</p>
        <p>india</p>
        <hr/>
      </div>
      <div>
        <h4>React.js developer</h4>
        <p>TMCS</p>
        <p>india</p>
        <hr/>
      </div>
      </div>
      
    </div>

    <div className='widget'>
      <div className='widget_top'>
        <div className='widget__header'>
          <h4>LinkedInd News</h4>
          {/* <InfoIcon /> */}
        </div>
        <div className='widget__body'>
          <ul className='widget__options'>
            <li>
              <h4>Slaying job search fees</h4>
              <p>6d ago * 4,55 readers</p>
            </li>
            <li>
              <h4>A Two Pizza rule for eating</h4>
              <p>2d ago * 7,15 readers</p>
            </li>
            <li>
              <h4>How to Handle a Workplace break</h4>
              <p>3d ago * 8,35 readers</p>
            </li>
            <li>
              <h4>Flexi leave is the new Flexi</h4>
              <p>4d ago * 3,45 readers</p>
            </li>
            <li>
              <h4>how to boost productivity</h4>
              <p>1d ago * 4,55 readers</p>
            </li>
          </ul>

        </div>
      </div>

      <div className='widget_bottom'>
        <div className='widget__header'>
          <h4>Todays Top courses</h4>
          {/* <InfoIcon /> */}

        </div>
        <div className='widget__body'>
          <ul className='widget__options'>
            <li>
              <h4>Leading with a Heavy Heat</h4>
              <p>kay Coly</p>
            </li>
            <li>
              <h4>Building Resillence</h4>
              <p>tatian kolovu</p>
            </li>
            <li>
              <h4>How to Handle a Workplace break</h4>
              <p>3d ago * 8,35 readers</p>
            </li>
            <li>
              <h4>Flexi leave is the new Flexi</h4>
              <p>4d ago * 3,45 readers</p>
            </li>
            <li>
              <h4>how to boost productivity</h4>
              <p>1d ago * 4,55 readers</p>
            </li>

          </ul>


        </div>
      </div>

    </div>
    </>
  )
}

export default JobSection
