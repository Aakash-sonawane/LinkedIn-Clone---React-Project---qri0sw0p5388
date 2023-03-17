import React, { useState } from 'react'
import "../styles/login.css"
function Login() {

  const[signUp, setSingnUp]=useState(false);
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const[photoUrl, setPhotoUrl]=useState("");

  const register=(event)=>{
    event.preventDefault();
    if(!name){
      return alert("Name is required");
    }
    if(!photoUrl){
      return alert("PhotoUrl is required");
    }
    if(!email){
      return alert("Email is required");
    }
    if(!password){
      return alert("Password is required");
    }
    setName("");
    setPhotoUrl("");
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <div className='loginScreen'>
          <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo-768x432.png"></img>
    {
      signUp===false? (<form>
        <input type={'email'} placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
        <input type={'password'} placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <input type='submit' value={'sign up'} />
      <h4>Not a member ? <span onClick={()=>{
        setSingnUp(true);
      }}>Register Here</span></h4>
      </form>) : (<form onSubmit={register}>
        <input type={'text'} placeholder='Full Name (Required if Registering)' value={name} onChange={e=>setName(e.target.value)}/>
        <input type={'text'} placeholder='Profile picture url' value={photoUrl} onChange={e=>setPhotoUrl(e.target.value)}/>
        <input type={'email'} placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
        <input type={'password'} placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <input type='submit' value={'sign up'} />
      <h4>Already a member ? <span onClick={()=>{
        setSingnUp(false);
      }}>Login Here</span></h4>
      </form>) 
    }
        

      
    </div>
    </>
  )
}

export default Login
