import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("token");

const initialState = {
  isAuthenticated: !!userToken,
  token: userToken || null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      (state.isAuthenticated = true),
        (state.token = action.payload.token),
        (state.email = action.payload.email);
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      (state.isAuthenticated = false),
        (state.token = null),
        (state.email = null),
        localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
