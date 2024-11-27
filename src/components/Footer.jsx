import React from "react";
import "../CSS/Footer.css"; 
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© 2024 Art Gallery. All rights reserved.</p>
      <div className="footer-links">
        <a href="/home">Upload Art</a>
        <a href="/gallery">Gallery</a>
        <Link to="/contact" className="footer-link">
          Contact Us
        </Link>
      </div>
      <div className="footer-icon">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
