import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/courses",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token"); // or get it from Redux state
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCourses: builder.query<course[], void>({
      query: () => "/",
    }),
    enrollInCourse: builder.mutation({
      query: ({ courseId, enrollmentData }) => ({
        url: `/${courseId}/enroll`,
        method: "POST",
        body: enrollmentData,
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useEnrollInCourseMutation } = courseApi;
