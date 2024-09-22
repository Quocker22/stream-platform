import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { notification } from "antd";

import { axiosInstance } from "@/api/axiosClient";
import { FormMeetModel } from "@/models/Meet";

const endpoint = async (data: FormMeetModel): Promise<true> => {
  const response = await axiosInstance.post(`/Room`, data);

  console.log("response", response);

  return true;
};

const useCreateMeet = () => {
  return useMutation((data: FormMeetModel) => endpoint(data), {
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

export { useCreateMeet };
