import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { notification } from "antd";

import { axiosInstance } from "@/api/axiosClient";
import { FormCourseModel } from "@/models/Course";

const endpoint = async (data: FormCourseModel): Promise<true> => {
  const response = await axiosInstance.put(`/Course`, data);

  console.log("response", response);

  return true;
};

const useUpdateCourse = () => {
  return useMutation((data: FormCourseModel) => endpoint(data), {
    onSuccess: () => {
      notification.open({
        message: "Course update successfully",
        type: "success",
        showProgress: true,
        pauseOnHover: false,
      });
    },
    onError: (e: AxiosError) => {
      notification.open({
        message: "Course update error",
        type: "error",
        showProgress: true,
        pauseOnHover: false,
      });
    },
  });
};

export { useUpdateCourse };
