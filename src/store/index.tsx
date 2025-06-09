import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { authApi } from "./apis/authApi";
import { appApi } from "./apis/appApi";
import { adminApi } from "./apis/adminApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginSuccess, logout } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [appApi.reducerPath]: appApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(appApi.middleware)
      .concat(adminApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useSignupMutation, useLoginMutation } from "./apis/authApi";
export {
  useGetUserCoursesQuery,
  useEnrollInCourseMutation,
  useGetAllCoursesQuery,
  useDeleteUserEnrollmentMutation,
  useGetCurrentUserQuery,
} from "./apis/appApi";
export {
  useCreateCourseMutation,
  useGetAllStudentsQuery,
  useGetAllStudentsByCourseQuery,
  useLazyGetAllStudentsByCourseQuery,
} from "./apis/adminApi";
export { loginSuccess, logout };
export type RootState = ReturnType<typeof store.getState>;
