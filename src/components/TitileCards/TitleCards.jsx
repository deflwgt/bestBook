/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const TitleCards = ({title,category}) => {
  
  const cardsRef = useRef();
  const handleWheel = ((event) => {
    event.preventDefault() ;
    cardsRef.current.scrollLeft += event.deltaY ; 
  })
  useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handleWheel) ; 
  },[])

  return (
    <div className='title-cards'>
      <h2>{title ? title:"— Best sellers! — "} </h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card , index) => {
            return <Link to={`/player/${card.id}`} className="cardTit" key={card.id}>
              
              <img src={card.image} alt="" />
              <p className='cardname'>{card.name}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
