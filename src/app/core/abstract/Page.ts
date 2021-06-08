export interface Page<T> {
  content: T[];

  // General Metadata
  totalPages: number;
  totalElements: number;

  // Page Metadata
  numberOfElements: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}


