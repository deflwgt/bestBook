/* eslint-disable no-unused-vars */
import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { Link } from "react-router-dom";
import AboutUs from "../../pages/AboutUs/AboutUs";
import WhatNew from "../../pages/WhatNew/WhatNew";
import Podcasts from "../../pages/Podcasts/Podcasts"
import Motivation from "../../pages/Motivation/Motivation";
import Books from "../../pages/Books/Books";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import oops from "../../pages/Oops/oops";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left"> 
        <div > <Link to="/">
        <img src={logo} alt="" />
        </Link>
        </div>
        <ul>
          <li><Link to="/"> Home </Link> </li>
          <li style={{color:'red',}}> <Link to="/WhatNew"> Tool the Prediction </Link> </li>
          <li><Link to="/Books"> Recommend </Link> </li>
          <li><Link to="/Podcasts"> Podcasts </Link> </li>
          <li><Link to="/Motivation">Motivation </Link> </li>
          <li><Link to="/AboutUs"> About Us </Link> </li>
          <li><Link to ="/Chart">Chart</Link></li>
        </ul>
      </div>
      <div className="navbar-right">


        <div> <Link to="oops"> <img src={bell_icon} alt="" className="icons" /> </Link> </div>


        <div className="navbar-profile">
          <img src={profile_img} alt="" className="icons" />
          <Link to="Login">Sign !         .<img  src={caret_icon} alt="" /></Link>
          <div className="dropdown_nav">
            <p> <Link to="Login">Sign Out accout</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
