import axios from "axios";
import { AxiosConfig } from "../config/AxiosConfig";

export const register = async (data) => {
  const axios = AxiosConfig();
  let api = `/auth/register`;
  try {
    const res = await axios.get(api);
    console.log();
  } catch (error) {}
};

export const login = async (data) => {
  const axios = AxiosConfig();
  let api = `/auth/login`;
  try {
    const res = await axios.post(api);
    console.log();
  } catch (error) {}
};
