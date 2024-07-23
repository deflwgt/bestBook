/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'
import Navbar from '../../components/NavBar/Navbar'
import hero_banner from  '../../assets/hero_banner.jpg'
import hero_title from  '../../assets/hero_title.png'
import play_icon from  '../../assets/play_icon.png'
import info_icon from  '../../assets/info_icon.png'
import TitleCards from '../../components/TitileCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import logo from '../../assets/logo.png'
import { useState, useEffect } from 'react'
import Search from '../../components/Search/Search'
 
const Home = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='home'>
      <Navbar/>
      <Search/>
      <div className="hero"></div>
      <img src={hero_banner} alt="" className='banner-img'/>
      <div className="hero-caption">
        <img src={hero_title} alt="" className='caption-img'/>
        <p style={{fontSize:'30px' , color:'red'}}>Haruki Murakami’s latest has readers and reviewers perplexed !</p>
        <p> The story about the City and dream-reading in the chapter 1 is almost same as the “End fo the World”. And Murakami wrote the chapter 1 is the rewrite of same titled middle scaled novel published in 1980.
There are many Murakmai’s unique elements and motifs such as fragments-style, dual-world-story, alter world, separation between mind and body, books, reading, library, dream, loneliness, strange and awkward but sweet love with a girl, cooking, taking a long walk, coffee (and tea), fashion, ghost (or being like ghost), lost of persons or objects, and strange experiences.</p>
        <div className="hero-btns">
            <button className='btn'>
                <img src={play_icon} alt="" />Read
            </button>

            <button className='btn dark-btn'>
                <img src={info_icon}alt="" />More Info
            </button>
        </div>
        <TitleCards/>
      </div>
      <button
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          padding: '18px 30px',
          fontSize: '18px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          opacity: 0.75,
        }}
        onClick={scrollToTop}
      >
        Scroll Up ! 
      </button>
    
      <div className="more-cards">
       
        <TitleCards title={"— More from Haruki Murakami —"}/>
        <TitleCards title={"— Only US — "}/>
        <TitleCards title={"— Upcoming — "}/>
        <TitleCards title={"— Just for you — "}/>
      </div>
      <Footer/>
      
     
    </div>
  )
}

export default Home
