import React from "react";
import { Form, Input } from "antd";

// Utility type to enforce name matching
type FormItemName<T> = keyof T;

interface FormItemProps<T> {
  name: FormItemName<T>;
  label: string;
  rules: any[];
  prefix: React.ReactNode;
  placeholder: string;
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
  <Form.Item name={name as string} rules={rules}>
    <Input size="large" prefix={prefix} placeholder={placeholder} type={type} />
  </Form.Item>
);

export default InputField;
