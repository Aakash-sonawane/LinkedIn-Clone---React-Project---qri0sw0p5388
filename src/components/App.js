
import React, { useEffect } from 'react'
// import '../styles/App.css';
// import Feed from './Feed';
// import Header from './Header';
// import SideBar from './SideBar';
// import Widjet from "./Widjet"
// import Login from './Login';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginuser, logoutuser, selectUser } from '../features/userSlice';
// import { auth } from '../firebase';
import Root from './routers/root';

const App = () => {
  return(
      <Root/>
    )
  
 

// const user = useSelector(selectUser);
// // console.log(user);
// const dispatch=useDispatch();

// useEffect(()=>{
//   // console.log("qqdiqjdiqjqidqidjijdidjq")
//   auth.onAuthStateChanged((userAuth)=>{
//     // console.log(userAuth);
//     if(userAuth){
//       dispatch(loginuser({
//         email:userAuth.email,
//         uid:userAuth.uid,
//         photoURL:userAuth.photoURL,
//         displayName:userAuth.displayName
//       }))
//     }
//     else{
//       // logout
//       dispatch(logoutuser())
//     }
//   })
// },[])

//   return (
//     <>
//     {
//       !user ?(<Login/>)
//       :
//     <div className='app-wrapper'>
//       <Header/>
//       <div className='app__body'>
//         <SideBar/>
//         <Feed/>
//         <Widjet/>
//       </div>
//     </div>
//     }
    
      
//     </>
//   )
}


export default App;
