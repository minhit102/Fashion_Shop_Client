import React, { useState } from "react";
import { Link } from "react-router-dom"; // Sử dụng để điều hướng nếu bạn có dùng React Router
import "./Test1.css"; // Import file CSS cho sidebar

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle mở/đóng sidebar
  };

  return (
    <div className >
      
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <button onClick={toggleSidebar} className="toggle-btn">
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
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
    <div>
      <button>

      </button>
    </div>

    </div>
    
  );
};

export default Sidebar;
