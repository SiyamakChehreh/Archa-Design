import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type NewCourse = {
  title: string;
  description: string;
};

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/admin",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (credentials: NewCourse) => ({
        url: "/courses",
        method: "POST",
        body: credentials,
      }),
    }),
    getAllStudents: builder.query({
      query: () => ({
        url: "/students",
      }),
    }),
    getAllStudentsByCourse: builder.query<any, string>({
      query: (courseId) => ({
        url: `/students/${courseId}`,
      }),
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetAllStudentsQuery,
  useGetAllStudentsByCourseQuery,
  useLazyGetAllStudentsByCourseQuery,
} = adminApi;
