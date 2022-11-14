import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
// import { AccountResponse } from "../../actions/types";
import axios from "axios";

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
  reducers: {
    // setAuthTokens: (state, action) => {
    //   state.refreshToken = action.payload["refreshToken"];
    //   state.access = action.payload["access"];
    // },
    logout: (state) => {
      // state.refreshToken = null;
      state.access = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, actions) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
