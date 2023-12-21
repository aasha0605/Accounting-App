import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button  className="navbar-togle" onClick={toggleSidePanel}>
          <span className="navbar-toggle-icon" />
        </button>
        <Link className="navbar-logo" to="/home">Contack information</Link>
      </div>


      <div className={`navbar-links ${isSidePanelOpen ? 'open' : ''}`}>
       
        
        <Link className="navbar-link" to="/insurance">Manage Team</Link>
        <Link className="navbar-link" to="/policy">Contacts Information</Link>
        <Link  className="navbar-link" to="/claim">Account Balances</Link>
        <Link className="navbar-link" to="/claim">Bar Chart</Link>
       
        <Link className="navbar-si" to="/signup">Profile</Link>
      </div>

      <div className={`side-panel ${isSidePanelOpen ? 'open' : ''}`}>
        <a style={{textDecoration:'none'}} className="side-panel-link" >Home</a>
        <a className="side-panel-link" href="/about">About</a>
        <a className="side-panel-link" href="/services">Services</a>
        <a className="side-panel-link" href="/contact">Contact</a>
        <button className="side-panel-but"><Link to='/login'>Logout</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;

