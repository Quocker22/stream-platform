"use client";

import { Button, Form } from "antd";
import { Input, Textarea } from "@nextui-org/input";
import { useForm } from "antd/es/form/Form";

import { UploadField } from "../upload-field";

import { FormMeetModel } from "@/models/Meet";
import { useCreateMeet } from "@/hooks/useCreateMeet";

type FormItemName = keyof FormMeetModel;

interface FormItemProps {
  name: FormItemName;
  label: string;
  rules?: any[];
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
    <Input label={label} placeholder={placeholder} size="lg" type={type} />
  </Form.Item>
);

const CustomFormTextareaItem: React.FC<FormItemProps> = ({
  name,
  label,
  rules,
  placeholder,
}) => (
  <Form.Item name={name} rules={rules}>
    <Textarea label={label} placeholder={placeholder} size="lg" />
  </Form.Item>
);

export interface MeetFormProps {
  onSave?: (data: FormMeetModel) => void;
}

export const MeetForm: React.FC<MeetFormProps> = ({ onSave }) => {
  const [form] = useForm<FormMeetModel>();

  const { mutateAsync: createMeet } = useCreateMeet();

  const onFinish = async (data: FormMeetModel) => {
    await createMeet({
      ...data,
      roomThumbnail:
        "https://www.ruaanhgiare.vn/wp-content/uploads/2023/06/anh-ngau.jpg",
    });
    onSave?.(data);
  };

  return (
    <div>
      <Form form={form} name="meet_form" onFinish={onFinish}>
        <CustomFormItem
          label="room Key"
          name="roomKey"
          rules={[{ required: true, message: "Vui lòng nhập roomKey" }]}
        />

        <CustomFormTextareaItem
          label="Tiêu đề"
          name="roomTitle"
          placeholder="Nhập mô tiêu đề"
        />

        <Form.Item hidden name="roomThumbnail">
          <Input />
        </Form.Item>
        <UploadField
          onChange={(url) => {
            form.setFieldsValue({ roomThumbnail: url });
          }}
        />

        <Form.Item>
          <Button
            className="w-full mt-6 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            htmlType="submit"
            size="large"
            type="primary"
          >
            Tạo phòng học
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
