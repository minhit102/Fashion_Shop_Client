import { AxiosConfig } from "../config/AxiosConfig";
import { notification } from "antd";

export const register = async (data) => {
  const axios = AxiosConfig();
  let api = `/auth/register`;
  try {
    const res = await axios.get(api);
    console.log(res);
  } catch (error) { }
};

export const login = async (data) => {
  const axios = AxiosConfig();
  let api = `/auth/login`;
  try {
    const res = await axios.post(api, data);
    console.log(res.data)
    if (res.data.status === 1) {
      localStorage.setItem(
        `${process.env.REACT_APP_PREFIX_LOCAL}_access_token`,
        res.data.accessToken
      );
      localStorage.setItem(
        `${process.env.REACT_APP_PREFIX_LOCAL}_refreshToken`,
        res.data.refreshToken
      );
      return res.data;
    }
    else {
      return res.data;
    }

  } catch (error) {
    notification.error({
      message: 'Error',
      description: 'An error occurred during login.',
    });
  }
};
