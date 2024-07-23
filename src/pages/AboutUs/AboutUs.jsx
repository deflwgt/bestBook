/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import logo from "../../assets/logo.png";
import Home from "../Home/Home";
import { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const AboutUs = () => {
  const [bookName, setBookName] = useState("");
  const [borrowTime, setBorrowTime] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [borrowerName, setBorrowerName] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9rmkn07", "template_hawx2um", form.current, {
        publicKey: "UkSdy1aH-mciE601u",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setShowModal(true);
  };

  return (
    <>
      <div className="aboutUs">
        <Link to="/">
          <img src={logo} className="logo" alt="" />
        </Link>
        <h1>About Us ! </h1>
      </div>
      <div className="content">
        <h1>Best things just for you !</h1>
        <p>
          I provide a personal book lending service, all library books are my
          personal property, So the book source is limited, I will inform you
          via Email about the books availability <br />
          This project is developed in pure JSX, besides using a few external
          libraries This project is open source, if you need reference, please
          access my personal github account with the project name
          bestBook.https://github.com/deflwgt
          <br />
          The above project is in the process of being implemented so errors
          cannot be avoided. Please send all comments and suggestions to
          personal mailbox nguyenminhhien1_hus.edu.vn
          <br />
        </p>
        <h1>How to use form ! </h1>
        <p>
          The form above includes 3 main information, including:
          <br />
          - Instagram account name
          <br />
          - Contact email
          <br />
          - Content of the message to me: tell me which book do you want to
          borrow /author /borrowing time /return time ( loan and return location
          )
          <br />
          In case we cannot provide the book you borrowed, I will work with you
          to come up with a solution via the email or instagram DMs you provide.
          <br />
          Love you !
          <br />
          @defwgt
        </p>
      </div>

      <div className="abuForm">
        <form ref={form} onSubmit={sendEmail}>
          <label>Instagram </label>
          <input type="text" name="user_name" />
          <label>Email </label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea className="abuMess" name="message" />
          <button className="summitBut">
            <input className="summitIn" type="submit" value="Send" />{" "}
          </button>
        </form>
      </div>

      {showModal && (
        <div className="modal-abu">
          <div className="modal-abu-content">
            <span
              className="close-abu-button"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <p>Love you 1314 </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;
