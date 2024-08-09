import { useMutation } from "react-query";
import { notification } from "antd";

import { axiosInstance } from "@/api/axiosClient";

const endpoint = async (): Promise<boolean> => {
  await axiosInstance.post(`/api/User/logout`);

  return true;
};

const useLogout = () => {
  return useMutation(() => endpoint(), {
    onSuccess: () => {
      notification.open({
        message: "Đăng xuất thành công",
        type: "success",
        description: "Đăng xuất thành công",
        pauseOnHover: false,
      });
    },
    onError: () => {
      notification.open({
        message: "Đăng xuất thất bại",
        type: "error",
        showProgress: true,
        pauseOnHover: false,
      });
    },
  });
};

export { useLogout };
