import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from "react-i18next";
import img_language from "../../assets/image/app/translate.png"
import img_menu from "../../assets/image/app/menu.png"
import img_notification from "../../assets/image/app/notification.png"
import img_user from "../../assets/image/app/user.png"
import "./TheHeader.css"


const TheHeader = ({toggleNavbar}) => {
  const { t, i18n } = useTranslation();
  
  const handleDropdownToggle = (event) => {
    event.preventDefault();
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Thay đổi ngôn ngữ
  };

  return (
    <div className="container-header">
      <div className="header-up">
        <button className = "container-menubar-header" onClick={() => toggleNavbar() }>
          <img className = "img-menu" src = {img_menu} alt="Menu"/>
        </button>
        <div>
          <ul className = "container-up-header">
        <li className="dropdown">
          <button 
            onClick={handleDropdownToggle} 
            className="dropdownMenuButton" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <img className="image-img_language" src= {img_notification} alt="Vn"/>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><button className="dropdown-item" onClick={() => changeLanguage('en')} >{t("english")}</button></li>
            <li><button className="dropdown-item"  onClick={() => changeLanguage('vi')} >{t("vietnamese")}</button></li>
          </ul>
        </li>
        <li className="dropdown">
          <button 
            onClick={handleDropdownToggle} 
            className="dropdownMenuButton" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <img className="image-img_language" src= {img_language} alt="Vn"/>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><button className="dropdown-item" onClick={() => changeLanguage('en')} >{t("english")}</button></li>
            <li><button className="dropdown-item"  onClick={() => changeLanguage('vi')} >{t("vietnamese")}</button></li>
          </ul>
        </li>
        <li className="dropdown">
          <button 
            onClick={handleDropdownToggle} 
            className="dropdownMenuButton"
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <img className="image-img_language" src= {img_user} alt="Vn"/>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><button className="dropdown-item" onClick={() => changeLanguage('en')} >{t("profile")}</button></li>
            <li><button className="dropdown-item"  onClick={() => changeLanguage('vi')} >{t("logout")}</button></li>
          </ul>
        </li>
        </ul>
        </div>
        
      </div>
      <div className="header-down">
      Home / List Services /Add Service
      </div>
    </div>
  );
};

export default TheHeader;
