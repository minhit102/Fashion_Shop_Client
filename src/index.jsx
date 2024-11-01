import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppTest from "./AppTest";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import './i18n';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppTest/>
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
