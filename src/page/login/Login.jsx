import React, { useState } from "react";
import "./Login.css";
import loginImage from "../../assets/image/Login/img_login_page.png";
const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (phone === "" || password === "") {
      setError("Vui lòng nhập số điện thoại và mật khẩu.");
      return;
    }
    if (phone.length !== 10) {
      setError("Số điện thoại phải có 10 chữ số");
      return;
    }
    if (password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 kí tự ");
      return;
    }
    setError("");
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="title-Login">
          <h2>Đăng Nhập</h2>
        </div>
        <form className="form-container" onSubmit={handSubmit}>
          <lable className="container-lable">Số điện thoại</lable>
          <div className="container-input">
            <input
              className="input"
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>
          </div>
          <lable className="container-lable">Mật khẩu </lable>
          <div className="container-input">
            <input
              className="input"
              placeholder="Mật khẩu"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          {error && <div className="error-message">{error}</div>}

          <lable>
            <span>
              <input type="checkbox"></input>
            </span>
            <span>Ghi nhớ</span>
          </lable>
          <div className="container-button">
            <button className="button-login" type="submit">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
      <div className="container-image">
        <img src={loginImage} alt="Login Page" />
      </div>
    </div>
  );
};

export default Login;
