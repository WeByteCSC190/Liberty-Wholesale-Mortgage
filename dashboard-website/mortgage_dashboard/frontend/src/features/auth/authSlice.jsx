import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

export const Logout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};

export const logout = createAsyncThunk("accounts/logout", async (thunkAPI) => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
});

// Refresh the access token. The refresh token lives for a day, so
// we only need to update the shorter lived access token
export const refresh = createAsyncThunk(
  "accounts/token/refresh",
  async (thunkAPI) => {
    console.log("refreshing");
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
    }
  }
);
// export const refresh = createAsyncThunk(
//   "accounts/token/refresh",
//   async (thunkAPI) => {
//     const options = {
//       method: "post",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       url: "/accounts/token/refresh",
//       data: {
//         token: localStorage.getItem("refresh"),
//       },
//     };
//     try {
//       console.log("refreshing");
//       const res = await axios(options);
//       const data = await res.data;
//       if (res.status === 201 || res.status === 200) {
//         const access = data.access;
//         localStorage.setItem("access", access);
//         localStorage.setItem("refresh", data.refresh);
//         return data;
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (err) {
//       console.log("refresh failed");
//       return thunkAPI.rejectWithValue(err.response.data);
//     }
//   }
// );
// export const verify = createAsyncThunk(
//   "accounts/token/verify",
//   async (thunkAPI) => {
//     const options = {
//       method: "post",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       url: "/accounts/token/verify",
//       data: {
//         token: localStorage.getItem("access"),
//       },
//     };
//     try {
//       const res = await axios(options);
//       const data = await res.data;
//       if (res.status === 201 || res.status === 200) {
//         localStorage.setItem("isAuthenticated", true);
//         return true;
//       } else {
//         localStorage.setItem("isAuthenticated", true);
//         return false;
//       }
//     } catch (err) {
//       localStorage.setItem("isAuthenticated", true);
//       console.log(err);
//       return false;
//     }
//   }
// );

// http://127.0.0.1:8000/accounts/users/register
export const register = createAsyncThunk(
  "accounts/users/register",
  async ({ username, password }, thunkAPI) => {
    const options = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      url: "/accounts/users/register",
      data: {
        username: username,
        password: password,
      },
    };
    try {
      const res = await axios(options);
      const data = await res.data;
      if (res.status === 201 || res.status === 200) {
        // const access = data.access;
        // localStorage.setItem("access", access);
        // localStorage.setItem("refresh", data.refresh);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
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
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", data.refresh);
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
//   access: string | null,
//   refreshToken: string | null,
// };

const initialState = {
  isAuthenticated: false,
  loading: false,
  rejected: false,
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
        state.rejected = true;
        state.isAuthenticated = false;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state) => {
        state.isAuthenticated = false;
      });
    // .addCase(verify.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(verify.fulfilled, (state) => {
    //   state.isAuthenticated = true;
    //   state.loading = false;
    // })
    // .addCase(verify.rejected, (state) => {
    //   state.isAuthenticated = false;
    //   state.loading = false;
    // });
    // .addCase(refresh.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(refresh.fulfilled, (state) => {
    //   state.loading = false;
    // })
    // .addCase(refresh.rejected, (state) => {
    //   state.loading = false;
    // }
  },
});

export default authSlice.reducer;
