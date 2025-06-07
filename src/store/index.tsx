import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { authApi } from "./apis/authApi";
import { appApi } from "./apis/appApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginSuccess, logout } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(appApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useSignupMutation, useLoginMutation } from "./apis/authApi";
export {
  useGetUserCoursesQuery,
  useEnrollInCourseMutation,
  useGetAllCoursesQuery,
  useDeleteUserEnrollmentMutation,
} from "./apis/appApi";
export { loginSuccess, logout };
export type RootState = ReturnType<typeof store.getState>;
