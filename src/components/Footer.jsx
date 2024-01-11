import React from 'react';
import './Footer.css';
import Instagram from "./icons8-instagram.gif";
import Facebook from "./icons8-facebook.gif";
import Twitter from "./icons8-twitter.gif";
import Youtube from "./icons8-youtube.gif";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +91 8510063400 || 8510063600</p>
        </div>
        <div className="footer-content">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img className='iconImg' src={Instagram}/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img className='iconImg' src={Twitter}/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img className='iconImg' src={Facebook}/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img className='iconImg' src={Youtube}/>
            </a>
           
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <Link to={"/aboutus"}><p >About Us</p></Link>
        
        <p>&copy; 2023 delhitiffinwala. All Rights Reserved.</p>
        <Link to={"/terms&condition"}><p>Terms & Condition</p></Link>
      </div>
    </footer>
  );
};

export default Footer;