import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import { CourseTableCell } from "@/components/page/course/CourseTableCell";
import { CourseModel } from "@/models/Course";

interface CourseTableProps {
  courses: CourseModel[];
  onRowClick: (course: CourseModel) => void;
  onDelete: (course: CourseModel) => void;
  onEdit: (course: CourseModel) => void;
}

const columns = [
  { name: "COURSE", uid: "course" },
  { name: "CREATOR", uid: "creator" },
  { name: "PRICE", uid: "price" },
  { name: "STUDENTS", uid: "students" },
  { name: "CREATED DATE", uid: "cdate" },
  { name: "ACTIONS", uid: "actions" },
];

export const CourseTable: React.FC<CourseTableProps> = ({
  courses,
  onRowClick,
  onDelete,
  onEdit,
}) => {
  return (
    <Table aria-label="Course table">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={courses}>
        {(item) => (
          <TableRow
            key={item._id}
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => onRowClick(item)}
          >
            {(columnKey) => (
              <TableCell>
                <CourseTableCell
                  columnKey={columnKey}
                  course={item}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
