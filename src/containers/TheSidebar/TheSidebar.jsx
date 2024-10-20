import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./TheSidebar.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const TheSidebar = ({isShowNavbar}) => {
  return (
      
    <div className={`sidebar ${isShowNavbar ? "open" : ""}`}>

      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </div>    
  );
};

export default TheSidebar;
