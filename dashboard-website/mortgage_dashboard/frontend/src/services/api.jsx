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
  async (config) => {
    // Do something before request is sent
    config.headers["Authorization"] =
      "Bearer " + localStorage.getItem("access");
    return config;
  },
  (error) => {
    //do something with request error
    Promise.reject(error);
  }
);

//Add a response interceptor
instance.interceptors.response.use(
  (res) => {
    // Any status code that lie within the range of 2xx cause this
    // Do something with response data
    return res;
  },
  async (err) => {
    // Any status codes that fall outside the range of 2xx cause this
    // Do something with response error
    const originalConfig = err.config;

    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        await refresh();
        return instance(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    return Promise.reject(err);
  }
);

export default instance;

// Refresh the access token. The refresh token lives for a day, so
// we only need to update the shorter lived access token

let isRefreshing = false;
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
  if (!isRefreshing) {
    isRefreshing = true;
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
      // window.location.reload(false);
    }
  } else {
    return new Promise((r) => setTimeout(r, 1000));
  }
};

const timeout = async () => {
  return new Promise((r) => setTimeout(r, 1000));
};
