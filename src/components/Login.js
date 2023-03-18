import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginuser } from '../features/userSlice';
import { auth } from '../firebase';
import "../styles/login.css"

function Login() {

  const[signUp, setSingnUp]=useState(false);
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const[photoURL, setphotoURL]=useState("");

  const dispatch=useDispatch();

  const register=(event)=>{
    event.preventDefault();
    if(!name){
      return alert("Name is required");
    }
    if(!photoURL){
      return alert("photoURL is required");
    }
    if(!email){
      return alert("Email is required");
    }
    if(!password){
      return alert("Password is required");
    }
    auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoURL:photoURL
      }).then(()=>{
        dispatch(loginuser({
          email:userAuth.user.email,
          uid:userAuth.user.uid,
          photoURL:photoURL,
          displayName:name
        }))
      })
    }).catch(error=>alert(error));

    setName("");
    setphotoURL("");
    setEmail("");
    setPassword("");
  }

  const signIn=(event)=>{
    event.preventDefault();
    if(!email){
      return alert("Email is required");
    }
    if(!password){
      return alert("Password is required");
    }

    auth.signInWithEmailAndPassword(email,password).then(({user})=>{
      // console.log(user);
      dispatch(loginuser({
        email:user.email,
        uid:user.uid,
        photoURL:user.photoURL,
        displayName:user.displayName
      }))
    }).catch(error=>alert(error));

  }

  return (
    <>
      <div className='loginScreen'>
          <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo-768x432.png"></img>
    {
      signUp===true? (<form onSubmit={register}>
        <input type={'text'} placeholder='Full Name (Required if Registering)' value={name} onChange={e=>setName(e.target.value)}/>
        <input type={'text'} placeholder='Profile picture url' value={photoURL} onChange={e=>setphotoURL(e.target.value)}/>
        <input type={'email'} placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
        <input type={'password'} placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <input type='submit' value={'sign up'} />
      <h4>Already a member ? <span onClick={()=>{
        setSingnUp(false);
      }}>Login Here</span></h4>
      </form> ) : (<form onSubmit={signIn}>
        <input type={'email'} placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
        <input type={'password'} placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <input type='submit' value={'Sign In'} />
      <h4>Not a member ? <span onClick={()=>{
        setSingnUp(true);
      }}>Register Here</span></h4>
      </form>) 
    }
        
         
      
    </div>
    </>
  )
}

export default Login
