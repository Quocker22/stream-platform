import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { notification } from "antd";

import { axiosInstance } from "@/api/axiosClient";
import { FormResponseRoomRequestModel } from "@/models/Meet";

const endpoint = async (data: FormResponseRoomRequestModel): Promise<true> => {
  const response = await axiosInstance.post(`/Room/ResponseRoomRequest`, data);

  console.log("response", response);

  return true;
};

const useResponseRoomRequest = () => {
  return useMutation((data: FormResponseRoomRequestModel) => endpoint(data), {
    onSuccess: () => {},
    onError: (e: AxiosError) => {
      notification.open({
        message: "Response Room creation error",
        type: "error",
        showProgress: true,
        pauseOnHover: false,
      });
    },
  });
};

export { useResponseRoomRequest };
