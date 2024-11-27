import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import '../CSS/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/home">
          🎨 Art Gallery
        </Link>
        
       
        <button className="hamburger" onClick={toggleMenu}>
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i> 
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link className="nav-link" to="/home">
            Upload Painting
          </Link>
          <Link className="nav-link" to="/gallery">
            View Paintings
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
