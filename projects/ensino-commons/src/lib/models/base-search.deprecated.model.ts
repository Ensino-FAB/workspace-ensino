export interface BaseSearch {
  q?: string;
  paginate?: boolean;
  size?: number;
  page?: number;
  pageSize?: number;
  orderBy?: string[];

  // prop -> para poder usar em HttpParams({ fromObject: search });
  [prop: string]: any;
}
