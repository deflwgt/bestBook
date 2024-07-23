/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import AboutUs from './pages/AboutUs/AboutUs'
import WhatNew from './pages/WhatNew/WhatNew'
import Podcasts from './pages/Podcasts/Podcasts.jsx'
import Motivation from './pages/Motivation/Motivation.jsx'
import Books from './pages/Books/Books.jsx'
import Oops from './pages/Oops/oops.jsx'
import Chart from './pages/Chart/Chart.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/player/:id' element= {<Player/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/WhatNew' element={<WhatNew/>}/>
        <Route path='/Podcasts' element={<Podcasts/>}/>
        <Route path='/Motivation' element={<Motivation/>}/>
        <Route path='/Books' element={<Books/>}/>
        <Route path='/oops' element={<Oops/>}/>
        <Route path='/chart' element={<Chart/>}/>
      </Routes>
    </div>
  )
}
export default App
