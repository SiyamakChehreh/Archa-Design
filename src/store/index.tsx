import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { authApi } from "./apis/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginSuccess, logout } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useSignupMutation, useLoginMutation } from "./apis/authApi";
export { loginSuccess, logout };
export type RootState = ReturnType<typeof store.getState>;
