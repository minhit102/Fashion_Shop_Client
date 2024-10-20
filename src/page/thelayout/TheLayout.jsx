import React, { useState } from "react";
import "./TheLayout.css"
import  TheSidebar  from "../../containers/TheSidebar/TheSidebar";
import TheContent  from "../../containers/TheContent/TheConten";
import TheHeader  from "../../containers/TheHeader/TheHeader";
import TheFooter  from "../../containers/TheFooter/TheFooter";

const TheLayout = (props) => {
    const [isShowNavbar , setIsShowNavbar] = useState(true)

    const toggleNavbar = () => {
        setIsShowNavbar(!isShowNavbar)
    }

  return (
    <div className="main-container">
      <TheSidebar isShowNavbar={isShowNavbar} />
      <div className="container-header-content">
        <TheHeader toggleNavbar = {toggleNavbar}  />
        <div className="container_content">
          <TheContent  />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
