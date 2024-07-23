/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './WhatNew.css'
import logo from '../../assets/logo.png'
import Home from '../Home/Home'
import { createWorker } from 'tesseract.js';
import '@chatscope/chat-ui-kit-react'
import { MainContainer , ChatContainer ,MessageList ,Message,MessageInput,TypingIndicator } from "@chatscope/chat-ui-kit-react"

const WhatNew = () => {

const [selectedImage , setSelectedImage] = useState(null); 
const[textResult,setTextResult] = useState("") ;
const worker = createWorker() ;

const [messages , setMessage] =useState([
  {
    message : "helu boiz" ,   
    sender : "chatGPT"
  }
]);
const hanndeSend = async (message )  =>{
  const newMessage = {
    message : message ,
    sender: "user" 
  }
}

const convertImageToText = useCallback( async () => {
  if(!selectedImage) return ;
  await worker.load();
  await worker.loadLanguage("eng") ; 
  await worker.initialize("eng") ;
  const { data } =await worker.recognize(selectedImage) ;
  setTextResult(data.text); 
} ,[worker , selectedImage]);

useEffect(()=>{
  convertImageToText();
},[selectedImage ,convertImageToText])

const handleChangeImage = e =>{
  if(e.target.files[0]) {
    setSelectedImage(e.target.files[0]);
  } else {
    setSelectedImage(null);
    setTextResult("");
  }
}

<div className='test'>
  <MainContainer>
    <ChatContainer>
        <MessageList>
          {
            messages.map((message,i) => {
              return <Message key={i} model={message}/>
            })
          }
        </MessageList>
        <MessageInput placeholder='Type message here' onSend={hanndeSend}/>
    </ChatContainer>
  </MainContainer>
</div>


  return (
    <>
      <div className='aboutUs'>
      <Link to="/">
      <img src={logo} className='logo' alt="" />
      </Link>
      <h1>Convert your image !</h1> </div>

<div className='convert'>
<h1 > Hey that new ! </h1>
<p>  Get words to img </p>
<div className='input-wrapper'>
  <label htmlFor="upload"> Upload Image Here!</label>
  <input type="file" id="upload" accept='image/*'onChange={handleChangeImage}/>
</div>

<div className="result">
    {selectedImage && (<div className='box-image'>
<img src={URL.createObjectURL(selectedImage)} alt="thumb" />
    </div>)}

    {textResult&& (
      <div className="pox-p">
        <p>{textResult}</p>
      </div>
    )}
</div>
</div>
    </>
  )
}

export default WhatNew
