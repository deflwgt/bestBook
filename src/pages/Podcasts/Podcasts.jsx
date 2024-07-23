/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import './Podcasts.css'
import logo from '../../assets/logo.png'
import Home from '../Home/Home'
import sptf from '../../assets/sptf.png'
import scl from '../../assets/scl.png'


const Podcasts = () => {
  return (
    
      <>
      <div className='aboutUs'>
    <Link to="/">
      <img src={logo} className='logo' alt="" />
      </Link>
      <h1>Podcast ! </h1>
    </div>

    <div className='table'>
      <h1>Choose to listen</h1>
      <p>Hands free, head free with the podcast app below   !</p>
      <div className='choose'>
       <ul>
       <a href="https://open.spotify.com/show/4izcOxvJbc0RfA1SywCyHV?si=768f264bb4834176" target="_blank" > <li> <img src={sptf} alt="" /></li>  </a> 
       <a href="https://on.soundcloud.com/SEuPDxdRot6CEQVK8" target="_blank" > <li> <img src={scl} alt="" /></li>  </a> 
       </ul>
      </div>
      <div className='name'>       
      <p>Spotify Podcast</p>
      <p>SoundCloud</p>
      </div>
    </div>
      
      </>
    
  )
}

export default Podcasts
