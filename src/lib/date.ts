import { compareDesc as _compareDesc, format as _format, parseISO } from 'date-fns';

export const format = (date: string) => {
  return _format(parseISO(date), 'yyyy년 M월 d일');
}

export const compareDesc = _compareDesc;