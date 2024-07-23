/* eslint-disable no-unused-vars */
import React from 'react'
import './oops.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Home from '../Home/Home'

const oops = () => {
  return (
    <div className='oops'>
       <Link to="/">
      <img src={logo} className='logo' alt="" />
      </Link>
      <h1>Oopps... My bad   :(     404</h1>
    </div>
  )
}

export default oops
