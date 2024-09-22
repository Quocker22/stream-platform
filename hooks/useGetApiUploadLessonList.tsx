"use client";

import { useQuery } from "react-query";

import { axiosInstance } from "@/api/axiosClient";
import { ApiUploadLessonListModel } from "@/models/Course";

const endpoint = async (): Promise<ApiUploadLessonListModel[]> => {
  const response = await axiosInstance.get(`/Course/GetCoursePresignedUrl?n=1`);

  return response.data as ApiUploadLessonListModel[];
};

const useGetApiUploadLessonList = () => {
  return useQuery<ApiUploadLessonListModel[], Error>(
    ["get-api-upload-lesson-list"],
    () => endpoint(),
    {
      onSuccess: () => {},
      onError: (error: Error) => {
        console.error("API call failed:", error);
      },
    },
  );
};

export { useGetApiUploadLessonList };
