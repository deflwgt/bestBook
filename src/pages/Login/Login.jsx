/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import Home from '../Home/Home'
import { Link } from 'react-router-dom'

const Login = () => {

const[signState,setSignState] = useState("Sign in")

  return (
    <div className='login'>
      <Link to="/">
      <img src={logo} className='login-logo' alt="" />
      </Link>
      <div className='login-from'>
        <h1>
         {signState}
        </h1>
        <form >
          {signState=="Sign Up"?<input type="text" placeholder='Your name' />:<></>}
          
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />

          <Link to="/"><button>{signState}</button> </Link>
          
          <div className='form-help'>
            <div className="remember"></div>
              <input type="checkbox" />
              <label>Remember me! </label>
          </div>

        </form>
        <div className="form-switch">
          {signState==="Sign In" ? <p> New to us ? <span onClick={()=>{setSignState("Sign Up")}}>            Sign up now </span></p> 
                                :  <p>Already have account ?<span  onClick={()=>{setSignState("Sign In")}} > Sign in now </span></p> 
          } 
        </div>
      </div>
    </div>
  )
}

export default Login
