import {
  compareDesc as _compareDesc,
  compareAsc as _compareAsc,
  format,
  parseISO,
} from 'date-fns';

export const krDateFormatter = (date: string) => {
  return format(parseISO(date), 'yyyy년 M월 d일');
};

export const compareDesc = _compareDesc;
export const compareAsc = _compareAsc;
