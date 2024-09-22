"use client";

import { Button, Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { FormJoinRoomRequestModel } from "@/models/Meet";
import { InputField } from "@/components/molecules/InputField";
import { useJoinRoomRequest } from "@/hooks/useJoinRoomRequest";
import { FormField } from "@/components/molecules/FormField";

export interface JoinMeetFormProps {
  onSave?: (data?: FormJoinRoomRequestModel) => void;
}

export const JoinMeetForm: React.FC<JoinMeetFormProps> = ({ onSave }) => {
  const pathname = usePathname();
  const [form] = useForm<FormJoinRoomRequestModel>();
  const [loading, setLoading] = useState(false);

  const { mutateAsync: joinRoomRequest } = useJoinRoomRequest();

  useEffect(() => {
    const roomPattern = /^\/room\/[a-zA-Z0-9]+$/;

    if (roomPattern.test(pathname)) {
      onSave?.();
    }
  }, [pathname, onSave]);

  const onFinish = async (data: FormJoinRoomRequestModel) => {
    setLoading(true);
    try {
      await joinRoomRequest({ ...data, cmd: "roomRequest" });
    } catch (error) {
      setLoading(false);
      console.error("Lỗi khi tham gia phòng học:", error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div>
      <FormField form={form} name="join_meet" onFinish={onFinish}>
        <InputField
          form={form}
          label="Id phòng học"
          name="roomKey"
          placeholder="Nhập ID phòng học"
        />
        <Form.Item>
          <Button
            className="w-full mt-6 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            htmlType="submit"
            loading={loading}
            size="large"
            type="primary"
          >
            {loading ? "Đợi thầy cô cho phép..." : "Tham gia phòng học"}
          </Button>
        </Form.Item>
      </FormField>
    </div>
  );
};
