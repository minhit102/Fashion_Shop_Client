import React, { useEffect, useState } from "react";
import "./Login.css";
import loginImage from "../../assets/image/Login/img_login_page.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/user";
import { notification } from "antd";
import { setUser } from "../../features/userSlice";
import { useTranslation } from "react-i18next"; // Import useTranslation
const _ = require("lodash");

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation(); // Sử dụng useTranslation để lấy hàm t

  const handSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (phone === "" || password === "") {
      setError(t("please_enter")); // Dịch thông báo lỗi
      notification.error({
        message: t("login_failed"), // Dịch tiêu đề thông báo
        description: error,
      });
      return;
    }
    if (phone.length !== 10) {
      setError(t("phone_length")); // Dịch thông báo lỗi
      return;
    }
    if (password.length < 8) {
      setError(t("password_length")); // Dịch thông báo lỗi
      return;
    }
    setError("");
    try {
      const response = await login({ emailOrPhone: phone, password });
      console.log("res " + response.user);
      console.log(response.status);
      dispatch(setUser(response));
      navigate("/");
    } catch (e) {}
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="title-Login">
          <h2>{t("login")}</h2> {/* Dịch tiêu đề */}
        </div>
        <form className="form-container" onSubmit={handSubmit}>
          <label className="container-lable">{t("phone_number")}</label> {/* Dịch label */}
          <div className="container-input">
            <input
              className="input"
              placeholder={t("phone_number")} // Dịch placeholder
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>
          </div>
          <label className="container-lable">{t("password")}</label> {/* Dịch label */}
          <div className="container-input">
            <input
              className="input"
              placeholder={t("password")} // Dịch placeholder
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          {error && <div className="error-message">{error}</div>}

          <label>
            <span>
              <input type="checkbox"></input>
            </span>
            <span>{t("remember_me")}</span> {/* Dịch cho Ghi nhớ nếu cần */}
          </label>
          <div className="container-button">
            <button className="button-login" type="submit">
              {t("login")} {/* Dịch cho nút Đăng nhập */}
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
