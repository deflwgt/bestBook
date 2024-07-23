/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { Navigate, useParams } from "react-router-dom";
import cards_data from "../../assets/cards/Cards_data";
import StarRating from '../../components/Rate'
import {Link} from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io';
import logo from '../../assets/logo.png'
import Home from '../Home/Home'
import play_icon from  '../../assets/play_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import ig_icon from '../../assets/instagram_icon.png'
import fb_icon from '../../assets/facebook_icon.png'

const Player = (props) => {
  const [rating, setRating] = useState(props.rating);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  useEffect(() => {
    // Đọc danh sách comments từ local storage khi component được mount
    const storedComments = JSON.parse(localStorage.getItem(`book_${props.id}_comments`)) || [];
    setComments(storedComments);
  }, [props.id]);

  const handleRatingChange = (newRating) => {
    // Cập nhật rating trong state và local storage
    setRating(newRating);
    saveRatingToLocal(newRating);
  };

  const saveRatingToLocal = (newRating) => {
    // Lưu rating vào local storage
    localStorage.setItem(`book_${props.id}_rating`, newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // Tạo mới comment và cập nhật vào state và local storage
    const newComment = { id: comments.length + 1, text: comment };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    saveCommentsToLocal(updatedComments);
    setComment('');
  };

  const saveCommentsToLocal = (comments) => {
    // Lưu danh sách comments vào local storage
    localStorage.setItem(`book_${props.id}_comments`, JSON.stringify(comments));
  };
  const { id } = useParams();
  const crrData = cards_data.find((item) => String(item.id) === id); 
  
  return (
    <>
    <div className="player">
      {/* <Link to='/' className="back"><IoIosArrowBack/></Link> */}
      <div className='aboutUs'>
    <Link to="/">
      <img src={logo} className='logo' alt="" />
      </Link>
      <h1> {crrData.name} </h1>
    </div>
    <h1 className="introduce"> Infomation: </h1>  
        <div className="rate">
          <h2>Rate</h2>        
        </div>
        <div className="player_content">
        <img src={crrData.image} alt="" />
        <div className="name_author_rating">
        <h1>{crrData.name}</h1>
        <p>Author name : {crrData.author}</p>
        <p>Tags : {crrData.decs}</p>      
        <StarRating rating={rating} onRatingChange={handleRatingChange}/>
        <Link to="/AboutUs">
        <button className='btn'>
               Add to wishlist !
            </button>
            </Link> 
        </div>
        </div>
    <h1 className="compendious"> Compendious: </h1>    
        <p className="data_content">{crrData.content}</p>
        <h1 className="comm">Comments:</h1>
        <ul className="li_text" >
          {comments.map((comment) => (
            <li  key={comment.id}> {comment.text}</li>
          ))}
        </ul>
        <div className="comment">
          <textarea className="textPlayer"
            rows="4"
            cols="50" 
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
          />
          <button onClick={handleCommentSubmit}><h4>Comment</h4></button>
        </div>
      <div className='footer'>
      <div className="footer-icons">
        <ul>
          <li><Link to="/oops">Location</Link></li>
          <li><Link to="/oops">Help Center</Link></li>
          <li><Link to="/oops">Gift Card</Link></li>
          <li><Link to="/oops">Tearm of Use</Link>   </li>
          <li><Link to="/oops">Lucky </Link> </li>
          <li><Link to="/oops">Privacy </Link> </li>
        </ul>
      </div>
    </div> 
    </div>
    </>
  );
};
export default Player;
