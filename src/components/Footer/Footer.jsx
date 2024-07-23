/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import ig_icon from '../../assets/instagram_icon.png'
import fb_icon from '../../assets/facebook_icon.png'
import { Link } from 'react-router-dom'
import oops from '../../pages/Oops/oops'


const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={ig_icon} alt="" />
        <img src={fb_icon} alt="" />

        <ul>
          <li> <Link to="/oops">Location</Link></li>
          <li> <Link to="/oops">Help Center</Link></li>
          <li> <Link to="/oops">Gift Card</Link></li>
          <li><Link to="/oops">Tearm of Use</Link>   </li>
          <li><Link to="/oops">Lucky </Link> </li>
          <li><Link to="/oops">Privacy </Link> </li>
        </ul>
        
      </div>
    </div>
  )
}

export default footer
