"use client";

import React from "react";
import { Button, Form } from "antd";
import { FaLock, FaRegUser } from "react-icons/fa";
import { FormRegisterModel } from "@/models/Auth";
import { useRegister } from "@/hooks/useRegister";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Logo } from "@/components/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";
type FormItemName = keyof FormRegisterModel;

interface FormItemProps {
  name: FormItemName;
  label: string;
  rules: any[];
  placeholder?: string;
  type?: string;
}

const CustomFormItem: React.FC<FormItemProps> = ({
  name,
  label,
  rules,
  placeholder,
  type,
}) => (
  <Form.Item name={name} rules={rules}>
    <Input size="lg" label={label} type={type} />
  </Form.Item>
);

const CustomFormSelect: React.FC<FormItemProps> = ({ name, label, rules }) => (
  <Form.Item name={name} rules={rules}>
    <Select label={label} required>
      {[
        { value: "ADMIN", label: "Admin" },
        { value: "MEMBER", label: "Member" },
      ].map((animal) => (
        <SelectItem key={animal.value}>{animal.label}</SelectItem>
      ))}
    </Select>
  </Form.Item>
);
export default function RegisterPage() {
  const [form] = Form.useForm<FormRegisterModel>();
  const dispatch = useDispatch();
  const { mutate: register } = useRegister();
  const router = useRouter();

  const onFinish = async (values: FormRegisterModel) => {
    await register(values, {
      onSuccess: async (response) => {
        await dispatch(setUser(response));
        await router.push("/");
      },
    });
  };

  return (
    <section className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/background.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply bg-opacity-60">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div className="p-6 space-y-4 md:space-y-6 lg:space-y-8 sm:p-8">
            <div className="flex justify-center content-center">
              <Link
                href="/"
                className="flex text-2xl pe-3 font-semibold text-white"
              >
                <Logo width={60} height={60} />
              </Link>{" "}
              <h1 className="pt-2 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng ký
              </h1>
            </div>
            <Form
              form={form}
              name="normal_login"
              className="space-y-4 md:space-y-6"
              initialValues={{
                dislayName: "Đinh Viết Quốc",
                email: "test@gmail.com",
                userName: "quocth879",
                password: "zxcvzxcv",
                role: "ADMIN",
              }}
              onFinish={onFinish}
            >
              <CustomFormItem
                name="dislayName"
                label="Họ tên đầy đủ"
                rules={[
                  { required: true, message: "Vui lòng nhập Họ tên đầy đủ!" },
                ]}
                placeholder="Nguyễn Văn..."
              />

              <CustomFormItem
                name="email"
                label="Email"
                type="email"
                rules={[{ required: true, message: "Vui lòng nhập Email!" }]}
                placeholder="example@gmail.com"
              />

              <CustomFormItem
                name="userName"
                label="Tên đăng nhập"
                rules={[
                  { required: true, message: "Vui lòng nhập Tên đăng nhập!" },
                  { min: 6, message: "Tên đăng nhập phải dài trên 6 ký tự!" },
                ]}
                placeholder="Tên đăng nhập"
              />

              <CustomFormItem
                name="password"
                label="Mật khẩu"
                rules={[
                  { required: true, message: "Vui lòng nhập mật khẩu!" },
                  { min: 6, message: "Mật khẩu phải dài trên 6 ký tự!" },
                ]}
                placeholder="Mật khẩu"
                type="password"
              />

              <CustomFormSelect
                name="role"
                label="Role"
                rules={[{ required: true, message: "Vui lòng chọn role!" }]}
              />

              <Form.Item>
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Đăng nhập
                </Button>
              </Form.Item>

              <p className="text-sm font-light text-center text-gray-500 dark:text-gray-300">
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Đăng nhập ngay?
                </a>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
