import React, { useMemo } from "react";
import { Pagination } from "@nextui-org/react";

import { QueryState } from "./request";

interface CustomPaginationProps {
  queryState: QueryState<object>;
  totalItems: number;
  updateQueryState: (updates: Partial<QueryState<object>>) => void;
}

export const CustomPagination: React.FC<CustomPaginationProps> = ({
  queryState,
  totalItems,
  updateQueryState,
}) => {
  const totalPages = useMemo(
    () => Math.ceil(totalItems / queryState.pageSize),
    [totalItems, queryState.pageSize],
  );

  const onPageChange = (newPage: number) => {
    updateQueryState({ page: newPage });
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-4">
      <Pagination
        page={queryState.page}
        total={totalPages}
        onChange={onPageChange}
      />
    </div>
  );
};
