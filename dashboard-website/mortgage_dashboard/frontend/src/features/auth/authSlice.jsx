import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
// import { AccountResponse } from "../../actions/types";
import axios from "axios";

export const Logout = () =>{
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('username');
}

export const verify = createAsyncThunk(
  "accounts/token/verify",
  async (thunkAPI) => {
    const options = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      url: "/accounts/token/verify",
      data: {
        token: localStorage.getItem('refresh'), 
      },
    };
    try {
      const res = await axios(options);
      const data = await res.data;
      if (res.status === 201 || res.status === 200) {
        localStorage.setItem('isAuthenticated', true);
        return true;
      } else {
        localStorage.setItem('isAuthenticated', true);
        return false;
      }
    } catch (err) {
      localStorage.setItem('isAuthenticated', true);
      console.log(err);
      return false;
    }
  }
);

export const login = createAsyncThunk(
  "accounts/token",
  async ({ username, password }, thunkAPI) => {
    const options = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      url: "/accounts/token",
      data: {
        username: username,
        password: password,
      },
    };
    try {
      const res = await axios(options);
      const data = await res.data;
      if (res.status === 201 || res.status === 200) {
        const access = data.access;
        const user = jwt_decode(access);
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("username", user.username);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
//
// type SliceState = {
//   isAuthenticated: boolean,
//   loading: boolean,
//   username: string | null,
//   access: string | null,
//   refreshToken: string | null,
// };

const initialState = {
  isAuthenticated: false,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
      })
      .addCase(verify.pending, (state) =>{
          state.loading = true;
      })
      .addCase(verify.fulfilled, (state) => {
          state.isAuthenticated = true;
          state.loading =false;
      })
      .addCase(verify.rejected, (state) =>{
          state.isAuthenticated = false;
          state.loading = false;
      })
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
