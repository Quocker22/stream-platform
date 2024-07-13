import { useMutation } from "react-query";
import { message, notification } from "antd";
import axiosInstance from "@/api/axiosClient";
import { FormLoginModel, UserModel } from "@/models/Auth";
import { AxiosError } from "axios";

const endpoint = async (userData: FormLoginModel): Promise<UserModel> => {
  const response = await axiosInstance.post(`/api/User/auth`, userData);
  return response.data as UserModel;
};

const useLogin = () => {
  return useMutation((data: FormLoginModel) => endpoint(data), {
    onSuccess: (data) => {
      notification.open({
        message: "Đăng nhập thành công",
        type: "success",
        showProgress: true,
        pauseOnHover: false,
      });
      console.log(data);
    },
    onError: (e: AxiosError) => {
      const mesageError = e.response?.data as string;
      console.error(e);
      notification.open({
        message: "Đăng nhập thất bại",
        type: "error",
        showProgress: true,
        pauseOnHover: false,
      });
    },
  });
};

export { useLogin };
