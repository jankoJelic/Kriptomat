export type FilterId = number;

export type Interval = number | string;
// export type Interval = 1 | 7 | 30 | 365 | "max";

export type OnPressRangeFilterProps = {
  days: string | number;
  filterId: number;
};
