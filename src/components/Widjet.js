import React from 'react'
import "../styles/widget.css"
import InfoIcon from '@mui/icons-material/Info';
function Widjet() {
  return (
    <div className='widget'>
      <div className='widget_top'>
        <div className='widget__header'>
          <h4>LinkedInd News</h4>
          <InfoIcon />
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
          <InfoIcon />

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
  )
}

export default Widjet
