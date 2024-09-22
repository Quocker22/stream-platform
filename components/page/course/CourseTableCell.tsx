import React from "react";
import {
  Chip,
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";

import { getRandomColor } from "../../utils/common";
import { VerticalDotsIcon } from "../tables/VerticalDotsIcon";

import { CourseModel } from "@/models/Course";

interface CourseTableCellProps {
  course: CourseModel;
  columnKey: React.Key;
  onView?: (course: CourseModel) => void;
  onEdit?: (course: CourseModel) => void;
  onDelete?: (course: CourseModel) => void;
}

export const CourseTableCell: React.FC<CourseTableCellProps> = ({
  course,
  columnKey,
  onView,
  onEdit,
  onDelete,
}) => {
  const renderContent = () => {
    switch (columnKey) {
      case "course":
        return (
          <div className="flex flex-col">
            <p className="font-medium">{course.title}</p>
            <p className="text-xs text-gray-500 truncate max-w-xs">
              {course.desc}
            </p>
            <div className="mt-1">
              {course?.tags?.map((tag, index) => (
                <Chip
                  key={index}
                  className="mr-1 mb-1"
                  color={getRandomColor()}
                  size="sm"
                >
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
        );
      case "creator":
        return (
          <User
            avatarProps={{ src: course.cuser?.user_avatar, size: "sm" }}
            name={course.cuser?.user_name}
          />
        );
      case "price":
        return <span>${course?.price?.toFixed(2)}</span>;
      case "students":
        return <span>{course?.students?.length}</span>;
      case "cdate":
        return <span>{new Date(course.cdate).toLocaleDateString()}</span>;
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onPress={() => onView?.(course)}>View</DropdownItem>
                <DropdownItem onPress={() => onEdit?.(course)}>Edit</DropdownItem>
                <DropdownItem onPress={() => onDelete?.(course)}>
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return <div>Default</div>;
    }
  };

  return <>{renderContent()}</>;
};
