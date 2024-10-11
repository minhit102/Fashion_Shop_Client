import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import("./page/login/Login"));
const Register = React.lazy(() => import("./page/register/Register"));
const Page500 = React.lazy(() => import("./page/page500/Page500"));
const Page404 = React.lazy(() => import("./page/page404/Page404"));
const TheLayout = React.lazy(() => import("./page/page500/Page500"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
          <Route path="/*" element={<TheLayout />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
