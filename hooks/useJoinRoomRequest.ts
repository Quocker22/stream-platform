import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { notification } from "antd";

import { axiosInstance } from "@/api/axiosClient";
import { FormJoinRoomRequestModel } from "@/models/Meet";

const endpoint = async (data: FormJoinRoomRequestModel): Promise<true> => {
  await axiosInstance.post(`/Room/JoinRoomRequest`, data);

  return true;
};

const useJoinRoomRequest = () => {
  return useMutation((data: FormJoinRoomRequestModel) => endpoint(data), {
    onSuccess: () => {},
    onError: (e: AxiosError) => {
      notification.open({
        message: "Không tìm thấy phòng học",
        type: "error",
        showProgress: true,
        pauseOnHover: false,
      });
    },
  });
};

export { useJoinRoomRequest };
