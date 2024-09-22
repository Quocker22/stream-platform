import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { notification } from "antd";

import { axiosInstance } from "@/api/axiosClient";
import { FormCourseModel } from "@/models/Course";

const endpoint = async (data: FormCourseModel): Promise<true> => {
  const response = await axiosInstance.post(`/Course`, data);

  console.log("response", response);

  return true;
};

const useCreateCourse = () => {
  return useMutation((data: FormCourseModel) => endpoint(data), {
    onSuccess: () => {
      notification.open({
        message: "Course create successfully",
        type: "success",
        showProgress: true,
        pauseOnHover: false,
      });
    },
    onError: (e: AxiosError) => {
      notification.open({
        message: "Course create error",
        type: "error",
        showProgress: true,
        pauseOnHover: false,
      });
    },
  });
};

export { useCreateCourse };
