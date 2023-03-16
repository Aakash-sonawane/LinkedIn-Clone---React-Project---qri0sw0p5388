import { Widgets } from '@material-ui/icons';
import React from 'react'
import '../styles/App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar';
import Widjet from "./Widjet"
const App = () => {


  return (
    
      <div className='app-wrapper'>
      <Header/>
      <div className='app__body'>
        <SideBar/>
        <Feed/>
        <Widjet/>
      </div>

      
    
    </div>
  )
}


export default App;
