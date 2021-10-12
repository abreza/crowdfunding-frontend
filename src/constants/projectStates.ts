export const projectStates: {
  value: 'FAILED' | 'FINISHED' | 'FINANCING' | 'REVIEWING' | 'START';
  label: string;
}[] = [
  {
    value: 'FAILED',
    label: 'رد شده',
  },
  {
    value: 'FINISHED',
    label: 'پایان یافته',
  },
  {
    value: 'FINANCING',
    label: 'در حال جذب سرمایه',
  },
  {
    value: 'REVIEWING',
    label: 'در دست بررسی',
  },
  {
    value: 'START',
    label: 'شروع',
  },
];
