// src/components/TheHeader.js
import React from "react";
import { CHeader, CBreadcrumb, CBreadcrumbItem } from "@coreui/react";
import routes from "../routes";
import { useLocation } from "react-router-dom";

const TheHeaderTest = () => {
  const location = useLocation();
  
  // Tạo breadcrumb từ routes
  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <CHeader withSubheader>
      <div className="px-3">
        <CBreadcrumb className="border-0 c-subheader-nav m-0 px-0 px-md-3">
          {pathnames.length > 0 ? (
            pathnames.map((value, index) => {
              const path = `/${pathnames.slice(0, index + 1).join("/")}`;
              const route = routes.find(route => route.path === path);

              return (
                <CBreadcrumbItem key={path} href={path}>
                  {route ? route.name : value}
                </CBreadcrumbItem>
              );
            })
          ) : (
            <CBreadcrumbItem active>Home</CBreadcrumbItem>
          )}
        </CBreadcrumb>
      </div>
    </CHeader>
  );
};

export default TheHeaderTest;
