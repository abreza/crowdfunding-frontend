import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { FormInputProps } from './FormInputProps';

export const FormInputText = ({
  name,
  control,
  controllerProps,
  textFieldProps,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      {...controllerProps}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          {...textFieldProps}
        />
      )}
    />
  );
};
