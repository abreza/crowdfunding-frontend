import Axios from "axios";
import setupInterceptorsTo from "./axiosInterceptors";

const axios = setupInterceptorsTo(
  Axios.create({
    baseURL: "",
  })
);

export const axiosFirmware = setupInterceptorsTo(
  Axios.create({
    baseURL: "",
  })
);

export const axiosDeviceConnectionTest = setupInterceptorsTo(
  Axios.create({
    baseURL: "",
  })
);

export const axiosConfig = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default axios;
