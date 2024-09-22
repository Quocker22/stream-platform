"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";

import { useGetCourseList } from "@/hooks/useGetCourseList";
import { useAuth } from "@/redux/useAuth";
import { useQueryRequest } from "@/components/utils/useQueryRequest";
import { CourseModal } from "@/components/page/course/course-modal";
import { CustomPagination } from "@/components/utils/CustomPagination";
import { CourseModel } from "@/models/Course";
import { useDeleteCourse } from "@/hooks/useDeleteCourse";
import { CourseTable } from "@/components/page/course/CourseTable";
import { SearchIcon } from "@/components/page/tables/SearchIcon";

export default function CreateCourse() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dataCourse, setDataCourse] = useState<CourseModel>();
  const { currentUser } = useAuth();
  const {
    queryString,
    updateQueryState,
    queryState,
    globalSearch,
    handleUpdateGlobalSearch,
  } = useQueryRequest();

  const { data: courses, refetch } = useGetCourseList(
    currentUser?.id || "",
    queryString,
  );

  const handleSave = () => {
    refetch();
  };

  const onClear = React.useCallback(() => {
    updateQueryState({ q: "", page: 1 });
  }, [updateQueryState]);

  const filteredCourses = React.useMemo(() => {
    return courses?.data?.filter((course) =>
      course.title.toLowerCase().includes((queryState.q || "").toLowerCase()),
    );
  }, [courses, queryState.q]);

  const paginatedCourses = React.useMemo(() => {
    const start = (queryState.page - 1) * queryState.pageSize;
    const end = start + queryState.pageSize;

    return filteredCourses?.slice(start, end);
  }, [filteredCourses, queryState.page, queryState.pageSize]);

  const { mutateAsync: deleteCourse } = useDeleteCourse();
  const handleDelete = async (course: CourseModel) => {
    await deleteCourse(course._id, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  const handleEdit = (course: CourseModel) => {
    setIsOpen(true);
    setDataCourse(course);
  };

  const handleRowClick = (course: CourseModel) => {
    router.push(`/profile/course/${course._id}`);
  };

  return (
    <section className="bg-gray-50 py-3 sm:py-5">
      <div className="px-4 mx-auto lg:px-6">
        <div className="relative p-2 overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="py-5">
            <div className="flex flex-col gap-4 sm:mb-4">
              <div className="flex justify-between gap-3 items-end">
                <Input
                  isClearable
                  className="w-full sm:max-w-[44%]"
                  placeholder="Search by title..."
                  startContent={<SearchIcon />}
                  value={globalSearch}
                  onClear={onClear}
                  onValueChange={handleUpdateGlobalSearch}
                />
                <div className="flex gap-3">
                  <CourseModal
                    course={dataCourse}
                    isOpen={isOpen}
                    onOpenChange={(isOpen: boolean) => {
                      setIsOpen(isOpen);
                      setDataCourse(undefined);
                    }}
                    onSave={handleSave}
                  >
                    <IoMdAddCircleOutline />
                    Thêm khóa học
                  </CourseModal>
                </div>
              </div>
            </div>
            <CourseTable
              courses={paginatedCourses || []}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onRowClick={handleRowClick}
            />
            <CustomPagination
              queryState={queryState}
              totalItems={filteredCourses?.length || 0}
              updateQueryState={updateQueryState}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
