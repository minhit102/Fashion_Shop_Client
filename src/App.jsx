import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import("./page/login/Login"));
const Register = React.lazy(() => import("./page/register/Register"));
const Page500 = React.lazy(() => import("./page/page500/Page500"));
const Page404 = React.lazy(() => import("./page/page404/Page404"));
const TheLayout = React.lazy(() => import("./page/thelayout/TheLayout"));
const Sidebar = React.lazy(() => import("./Test/Test1"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<TheLayout />} />
          <Route path="/test" element={<Sidebar />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
