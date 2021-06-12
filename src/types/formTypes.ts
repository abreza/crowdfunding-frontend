import { InputBaseComponentProps } from '@material-ui/core';
import { RefObject } from 'react';

export type formItems<T> = {
  options?: Array<any>;
  required?: boolean;
  itemName: T;
  getOptionSelected?: any;
  getOptionLabel?: any;
  label: string;
  // nextRef?: RefObject<HTMLDivElement | HTMLButtonElement> | any;
  nextRef?: RefObject<HTMLInputElement>;
  autoFocused?: boolean;
  validation?: Function;
  disabled?: boolean;
  inputProps?: InputBaseComponentProps;
  InputProps?: any;
  type?: string;
  className?: string;
};

// type custom = {x:[k:string]};
