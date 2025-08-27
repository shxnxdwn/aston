import type { LengthFilterType } from '@/features/PostLengthFilter';

const FilterConfig = {
  all: 'Все',
  short: 'Короткие',
  medium: 'Средние',
  long: 'Длинные'
} as const;

const filterTypes = Object.keys(FilterConfig) as LengthFilterType[];

export { FilterConfig, filterTypes };
