import { TextFieldProps } from '@material-ui/core';
import { Control, UseControllerProps } from 'react-hook-form';

export interface FormInputProps {
  name: string;
  control: Control;
  controllerProps: any;
  textFieldProps: TextFieldProps;
}
