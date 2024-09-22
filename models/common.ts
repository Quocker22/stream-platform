export type PaginationState = {
  pageSize: number;
  page: number;
  total_pages?: number;
  total_rows?: number;
};

export interface PaginationResponse<Data> extends PaginationState {
  data: Data;
}
