import axios from "axios";
import { setTimeout } from "react";
// import { refresh } from "../features/auth/authSlice";
// import { useDispatch } from "react-redux";

const instance = axios.create({
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access"),
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.headers["Authorization"] =
      "Bearer " + localStorage.getItem("access");
    // config.headers["Content-Type"] = "application/json";
    // config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  (error) => {
    //do something with request error
    Promise.reject(error);
  }
);

//Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that fall outside the range of 2xx cause this
    // Do something with response error
    const originalConfig = error.config;
    if (error.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      refresh();
      return instance.request(error.config);
    }
    return Promise.reject(error);
  }
);

export default instance;

// Refresh the access token. The refresh token lives for a day, so
// we only need to update the shorter lived access token
const refresh = async () => {
  const options = {
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
    url: "/accounts/token/refresh",
    data: {
      refresh: localStorage.getItem("refresh"),
    },
  };
  try {
    const res = await axios(options);
    const data = await res.data;
    if (res.status === 201 || res.status === 200) {
      localStorage.setItem("access", data.access);
      return data;
    } else {
      console.log("error1");
    }
  } catch (err) {
    console.log("refresh failed");
  } finally {
    window.location.reload(false);
  }
};
