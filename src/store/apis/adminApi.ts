import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type NewCourse = {
  title: string;
  description: string;
  image: File | null;
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
    /*createCourse: builder.mutation({
      query: (credentials: NewCourse) => ({
        url: "/courses",
        method: "POST",
        body: credentials,
      }),
    }),*/
    createCourse: builder.mutation<void, NewCourse>({
      query: ({ title, description, image }) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        if (image) {
          formData.append("image", image);
        }

        return {
          url: "/courses",
          method: "POST",
          body: formData,
          // Don't set 'Content-Type', let browser set multipart/form-data boundary
        };
      },
    }),
    deleteCourse: builder.mutation({
      query: (courseId: string) => ({
        url: `/courses/${courseId}`,
        method: "DELETE",
      }),
    }),
    getAllStudents: builder.query<any, void>({
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
  useDeleteCourseMutation,
} = adminApi;
