import axios from "axios";
import router from "../router/index";

const http = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: "5000",
  headers: {
    "Content-Type": "application/json",
  },
  defaults: {
    withCredentials: true,
  },
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      router.push("/login");
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default http;
