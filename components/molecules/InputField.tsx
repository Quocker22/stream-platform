import React from "react";
import { Form, Input, FormInstance } from "antd";

interface FormItemProps<T> {
  form: FormInstance<T>;
  name: keyof T;
  label?: string;
  rules?: any[];
  prefix?: React.ReactNode;
  placeholder?: string;
  type?: string;
}

const InputField = <T,>({
  name,
  label,
  rules,
  prefix,
  placeholder,
  type,
}: FormItemProps<T>) => (
  <Form.Item label={label} name={name as string} rules={rules}>
    <Input placeholder={placeholder} prefix={prefix} size="large" type={type} />
  </Form.Item>
);

export { InputField };
