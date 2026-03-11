export type Pagination<T> = {
  items: T[];
  total: number;
  pageSize: number;
  currentPage: number;
};
