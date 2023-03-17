
import React from 'react'
import '../styles/App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar';
import Widjet from "./Widjet"
import Login from './Login';
const App = () => {

const user = null;
  return (
    <>
    {
      !user ?(<Login/>)
      :
    <div className='app-wrapper'>
      <Header/>
      <div className='app__body'>
        <SideBar/>
        <Feed/>
        <Widjet/>
      </div>
    </div>
    }
    
      
    </>
  )
}


export default App;
