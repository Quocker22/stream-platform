"use client";

import { useQuery } from "react-query";

import { axiosInstance } from "@/api/axiosClient";
import { CourseModel } from "@/models/Course";
import { PaginationResponse } from "@/models/common";

const endpoint = async (
  idUser: string,
  query?: string,
): Promise<PaginationResponse<CourseModel[]>> => {
  const response = await axiosInstance.get(
    `/Course/GetUserCourses/${idUser}?${query}`,
  );

  return response.data as PaginationResponse<CourseModel[]>;
};

const useGetCourseList = (idUser: string, query?: string) => {
  return useQuery<PaginationResponse<CourseModel[]>, Error>(
    ["get-video", query],
    () => endpoint(idUser, query),
    {
      onSuccess: () => {},
      onError: (error: Error) => {
        console.error("API call failed:", error);
      },
    },
  );
};

export { useGetCourseList };
