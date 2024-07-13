import { useMutation } from "react-query";
import { message, notification } from "antd";
import axiosInstance from "@/api/axiosClient";
import { FormLoginModel, UserModel } from "@/models/Auth";
import { AxiosError } from "axios";

const endpoint = async (userData: FormLoginModel): Promise<UserModel> => {
  const response = await axiosInstance.post(`/api/User`, userData);
  return response.data as UserModel;
};

const useRegister = () => {
  return useMutation((data: FormLoginModel) => endpoint(data), {
    onSuccess: () => {
      notification.open({
        message: "Đăng ký thành công",
        type: "success",
        showProgress: true,
        pauseOnHover: false,
      });
    },
    onError: (e: AxiosError) => {
      const mesageError = e.response?.data as string
      console.error(e);
      notification.open({
        message: mesageError ? mesageError : "Đăng ký thất bại",
        type: "error",
        showProgress: true,
        pauseOnHover: false,
      });
    },
  });
};

export { useRegister };
