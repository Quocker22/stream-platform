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

import { MeetForm } from "./meet-form";

import { customTabsStyle } from "@/components/utils/common";
import { CourseModel } from "@/models/Course";
import { FormMeetModel } from "@/models/Meet";

interface Props extends ButtonProps {
  onSave?: () => void;
  onOpenChange?: (isOpen: boolean) => void;
  readonly isOpen?: boolean;
  readonly course?: CourseModel;
}

const MeetModal = (props: Props): JSX.Element => {
  const {
    isOpen: isOpenProp,
    onOpenChange,
    onSave,
    course,
    ...buttonProps
  } = props;
  const disclosure = useDisclosure({
    isOpen: isOpenProp,
    onClose: () => {
      onOpenChange?.(false);
    },
    onOpen: () => onOpenChange?.(true),
  });

  const handleSave = (data: FormMeetModel) => {
    disclosure.onClose();
    onSave?.();
  };

  return (
    <>
      <style>{customTabsStyle}</style>
      {!isOpenProp && (
        <Button
          {...buttonProps}
          onPress={() => {
            disclosure.onOpen();
          }}
        />
      )}

      <Modal
        isOpen={disclosure.isOpen}
        placement="top"
        size="4xl"
        onClose={() => {
          disclosure.onClose;
        }}
        onOpenChange={(open) => {
          disclosure.onOpenChange();
          onOpenChange?.(open);
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Tạo phòng học mới
          </ModalHeader>
          <ModalBody>
            <div className="flex w-full flex-col">
              <MeetForm onSave={handleSave} />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export { MeetModal };
