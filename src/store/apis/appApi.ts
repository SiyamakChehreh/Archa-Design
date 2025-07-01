import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create a single API slice
export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["UserCourses", "Courses", "Students", "UserRole"],
  endpoints: (builder) => ({
    // 🔸 Get courses enrolled by a specific user
    getUserCourses: builder.query<any, void>({
      query: () => "/students/my-courses",
      providesTags: ["UserCourses"],
    }),

    // 🔸 Enroll in a course
    enrollInCourse: builder.mutation({
      query: ({ courseId, enrollmentData }) => ({
        url: `/courses/${courseId}/enroll`,
        method: "POST",
        body: enrollmentData,
      }),
      invalidatesTags: ["UserCourses"],
    }),

    getAllCourses: builder.query<any, void>({
      query: () => "/courses",
      providesTags: ["Courses"],
    }),

    deleteUserEnrollment: builder.mutation<any, string>({
      query: (courseId) => ({
        url: `/students/my-courses/${courseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["UserCourses"],
    }),
    getCurrentUser: builder.query<any, void>({
      query: () => "/me",
      providesTags: ["UserRole"],
    }),
  }),
});

export const {
  useGetUserCoursesQuery,
  useEnrollInCourseMutation,
  useGetAllCoursesQuery,
  useDeleteUserEnrollmentMutation,
  useGetCurrentUserQuery,
} = appApi;
