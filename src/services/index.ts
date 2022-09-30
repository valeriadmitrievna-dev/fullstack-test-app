import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  responseType: "json",
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config && config.headers) {
      const token = localStorage.getItem("token");
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }
);

export default instance;
