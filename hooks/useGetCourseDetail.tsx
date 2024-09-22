"use client";

import { useQuery } from "react-query";

import { axiosInstance } from "@/api/axiosClient";
import { CourseModel } from "@/models/Course";

const endpoint = async (id?: string): Promise<CourseModel> => {
  const response = await axiosInstance.get(`/Course/GetCourse/${id}`);

  return response.data as CourseModel;
};

const useGetCourseDetail = (id?: string) => {
  return useQuery<CourseModel, Error>(
    ["get-course-detail", id],
    () => endpoint(id),
    {
      onSuccess: () => {},
      onError: (error: Error) => {
        console.error("API call failed:", error);
      },
    },
  );
};

export { useGetCourseDetail };
