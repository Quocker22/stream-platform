"use client";

import { Button, ButtonProps } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import React from "react";
import { useForm } from "antd/lib/form/Form";

import { customTabsStyle } from "../../utils/common";

import { JoinMeetForm } from "./form";

interface Props extends ButtonProps {
  onSave?: () => void;
}

const JoinMeetModal = (props: Props): JSX.Element => {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const [form] = useForm<{ idRoom: string }>();

  const onFinish = async (data: { idRoom: string }) => {
    console.log(data);
  };

  const onSave = () => {
    onClose();
    console.log("onSave");
  };

  return (
    <>
      <style>{customTabsStyle}</style>
      <Button
        {...props}
        onPress={() => {
          onOpen();
        }}
      />

      <Modal
        isOpen={isOpen}
        placement="top"
        size="4xl"
        onClose={onClose}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="min-h-[200px]">
          <ModalHeader className="flex flex-col gap-1">
            Tham gia phòng
          </ModalHeader>
          <ModalBody>
            <div className="flex w-full flex-col">
              <JoinMeetForm onSave={onSave} />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export { JoinMeetModal };
