import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
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
