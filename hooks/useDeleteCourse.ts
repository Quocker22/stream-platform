import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { notification } from "antd";

import { axiosInstance } from "@/api/axiosClient";

const endpoint = async (courseId: string): Promise<true> => {
  await axiosInstance.delete(`/Course/CourseDelete/${courseId}`);

  return true;
};

const useDeleteCourse = () => {
  return useMutation((courseId: string) => endpoint(courseId), {
    onSuccess: () => {
      notification.open({
        message: "Course deleted successfully",
        type: "success",
        showProgress: true,
        pauseOnHover: false,
      });
      console.log("Course deleted successfully");
    },
    onError: (e: AxiosError) => {
      notification.open({
        message: "Error deleting course",
        type: "error",
        showProgress: true,
        pauseOnHover: false,
      });
      console.error("Error deleting course:", e);
    },
  });
};

export { useDeleteCourse };
