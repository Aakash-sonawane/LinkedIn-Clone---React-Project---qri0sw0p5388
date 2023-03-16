import React from 'react'
import '../styles/App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar';
const App = () => {


  return (
    
      <div className='app-wrapper'>
      <Header/>
      <div className='app__body'>
        <SideBar/>
        <Feed/>

      </div>

      
    
    </div>
  )
}


export default App;
